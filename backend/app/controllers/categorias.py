
from flask.json import jsonify
from app import app
from app.models.DB.categorias import Categoria
from app.models.DB.produto import Produto
from app.models.Decorators.auth import token_required
from app.models.Decorators.fields import *

@app.route('/api/categorias')
@token_required
def get_categorias(current_user):
    cats = Categoria.query.all()
    return jsonify([x.toJson() for x in cats])

@app.route('/api/categorias',methods=['POST'])
@token_required
@fields_get()
@fields_required(["categoria","tipo"])
@fields_capiitalize(["categoria","tipo"])
def add_categoria(current_user,fields):
    cat = Categoria.query.filter_by(categoria=fields["categoria"],tipo=fields["tipo"]).first()
    if cat: return "Categoria ja existe!",400

    cat = Categoria(**fields)
    cat.save()
    return jsonify(cat.toJson())


@app.route('/api/categorias/<id_cat>',methods=['DELETE'])
@token_required
def deleta_categoria(current_user,id_cat):

    cat = Categoria.query.get(id_cat)
    if not cat: return "Categoria nao encontrada!",400

    prd = Produto.query.filter_by(id_categoria=cat.id).first()
    if prd: return "Existem produtos utilizando essa categoria!",400

    cat.delete()

    return jsonify(cat.toJson())

