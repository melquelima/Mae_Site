
import random
from flask.json import jsonify
from flask import request
from app import app,imgur
from app.models.DB.produto import Produto
from app.models.Decorators.auth import token_required
from app.models.Decorators.fields import *
from app.others.threads import ExportingThread
from threading import Thread

exporting_threads = {}

@app.route('/api/produto/todos')
@token_required
def get_produtos(current_user):
    produtos = Produto.query.all()

    return jsonify([x.toJson() for x in produtos])

@app.route('/api/produto/<id_prod>')
@token_required
def get_produto(current_user,id_prod=None):
    produto = Produto.query.get(id_prod)
    if not produto: return "Produto nao encontrado",400

    return jsonify(produto.toJson())

@app.route('/api/produto/<id_prod>/images',methods=['GET'])
@token_required
def get_produto_images(current_user,id_prod=None):
    produto = Produto.query.get(id_prod)
    if not produto: return "Produto nao encontrado",400

    images = imgur.getAlbumImages(produto.imgur_album)

    return jsonify([x["id"] for x in images[1]]),images[0]

@app.route('/api/produto/new',methods=['POST'])
@token_required
@fields_get(tpe="form")
@fields_required({"id_categoria":int,"descricao":str,"sempre_disponivel":bool,"quantidade":int,"valor":float,"Tags":list})
@fields_notEmpty(["id_categoria","descricao"])
def novo_produto(current_user,fields):
    files = request.files.getlist("images")
    if not files: return "carregue algumas imagens",400
    capa = request.files.get("capa")
    if not capa: return "selecione uma capa",400
    
    p = Produto(**fields)
    p.save()
    thread_id = random.randint(0, 10000)
    exporting_threads[thread_id] = ExportingThread(files,f"{fields['id_categoria']}_{p.id}",p,capa)
    exporting_threads[thread_id].start()
    return {"threadId":str(thread_id),"id_produto":p.id}

@app.route('/api/produto/<id>/edit',methods=['POST'])
@token_required
@fields_get(tpe="form")
@fields_required({"id_categoria":int,"descricao":str,"sempre_disponivel":bool,"quantidade":int,"valor":float,"Tags":list})
@fields_notEmpty(["id_categoria","descricao"])
def edditar_produto(current_user,id,fields):
    files = request.files.getlist("images")
    thread_id = ""
    p = Produto.query.get(id)
    if not p: return "Produto nao encontrado",400
    
    p.id_categoria      = fields['id_categoria']
    p.descricao         = fields['descricao']
    p.sempre_disponivel = fields['sempre_disponivel']
    p.quantidade        = fields['quantidade']
    p.valor             = fields['valor']
    p.tagsToAdd         = fields['Tags']
    p.save()
    
    if files:
        thread_id = random.randint(0, 10000)
        exporting_threads[thread_id] = ExportingThread(files,f"{fields['id_categoria']}_{p.id}",p)
        exporting_threads[thread_id].start()
    return {"threadId":str(thread_id),"id_produto":p.id}



@app.route('/api/upload/progress/<int:thread_id>')
def progress(thread_id):
    global exporting_threads
    #test = 0.5
    #return {'status':"PROCESSING",'message':'OK','progress':test}
    return exporting_threads[thread_id].status

@app.route('/api/produto/image/<id_img>',methods=['DELETE'])
@token_required
def produto_image_delete(current_user,id_img):

    images = imgur.delImage(id_img)

    return jsonify(images[1]),images[0]


@app.route('/api/produto/<id_produto>',methods=['DELETE'])
@token_required
def deleta_produto(current_user,id_produto):

    prdt = Produto.query.get(id_produto)
    if not prdt: return "Produto nao encontrada!",400

    resp = prdt.toJson()

    prdt.delete()

    Thread(target=imgur.deleteAlbum,args=[prdt.imgur_album]).start()

    return jsonify(resp)


@app.route('/api/produto/<id_produto>/cover',methods=['POST'])
@token_required
@token_required
@fields_get(tpe="form")
@fields_required({"image":str})
@fields_notEmpty(["image"])
def muda_capa_produto(current_user,id_produto,fields):

    prdt = Produto.query.get(id_produto)
    if not prdt: return "Produto nao encontrada!",400

    prdt.capa = fields["image"]
    prdt.save()

    resp = prdt.toJson()

    return jsonify(resp)