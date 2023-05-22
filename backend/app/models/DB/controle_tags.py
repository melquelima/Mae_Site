from app import db,ma
from sqlalchemy import Float,Column,Integer,String,ForeignKey,DateTime,Time,Boolean,Date
from datetime import datetime,date,timedelta
from marshmallow import Schema, fields

from app.others.mallow import mallow

class ControleTags(db.Model):
    __tablename__ = "controle_tags"

    id           = Column(Integer,primary_key=True)
    id_produto   = Column(Integer,ForeignKey('produtos.id'),nullable=False)
    id_tag       = Column(Integer,ForeignKey('tags.id'),nullable=False)
    Tag          = db.relationship("Tag",foreign_keys=id_tag)

    def __init__(self,id_produto,id_tag):
        self.id_produto   = id_produto
        self.id_tag       = id_tag

    def __repr__(self):
        return "<ControleTag %r>" % self.id

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.rollback()
        db.session.delete(self)
        db.session.commit()
    
    def toJson(self,schema=None):
        return mallow(schema if schema else ControleTagsSchema,self)



class ControleTagsSchema(ma.Schema):
    #id                = fields.Integer()
    #tag               = fields.Function(lambda Tag: Tag.tag)
    #id_categoria      = fields.Integer()
    id                = fields.Method("idfunc")
    tag               = fields.Method("tagfunc")
    enabled           = fields.Method("enbfunc")

    def idfunc(self, obj):
        return obj.Tag.id
    def tagfunc(self, obj):
        return obj.Tag.tag
    def enbfunc(self, obj):
        return obj.Tag.enabled