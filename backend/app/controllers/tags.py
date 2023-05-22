
from flask.json import jsonify
from app import app
from app.models.DB.Tag import Tag
from app.models.DB.controle_tags import ControleTags
from app.models.Decorators.auth import token_required
from app.models.Decorators.fields import *

@app.route('/api/tags')
@token_required
def get_tags(current_user):
    tags = Tag.query.all()
    return jsonify([x.toJson() for x in tags])


@app.route('/api/tags',methods=['POST'])
@token_required
@fields_get()
@fields_required(["tag"])
@fields_capiitalize(["tag"])
def add_tag(current_user,fields):
    tag = Tag.query.filter_by(tag=fields["tag"]).first()
    if tag: return "Tag ja existe!",400

    tag = Tag(fields["tag"],True)
    tag.save()
    return jsonify(tag.toJson())


@app.route('/api/tags/<id_tag>',methods=['DELETE'])
@token_required
def deleta_tag(current_user,id_tag):

    tag = Tag.query.get(id_tag)
    if not tag: return "Tag nao encontrada!",400

    prd = ControleTags.query.filter_by(id_tag=tag.id).first()
    if prd: return "Existem produtos utilizando essa tag!",400

    tag.delete()

    return jsonify(tag.toJson())



