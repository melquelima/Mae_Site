from app import db,ma
from sqlalchemy import Float,Column,Integer,String,ForeignKey,DateTime,Time,Boolean,Date
from datetime import datetime,date,timedelta
from marshmallow import Schema, fields
from app.models.DB.categorias import CategoriaSchema
from app.models.DB.controle_tags import ControleTags, ControleTagsSchema

from app.others.mallow import mallow

class Produto(db.Model):
    __tablename__ = "produtos"

    id                  = Column(Integer,primary_key=True)
    id_categoria        = Column(Integer,ForeignKey('categorias.id'),nullable=False)
    descricao           = Column(String(255),nullable = False)
    sempre_disponivel   = Column(Boolean,nullable = False)
    quantidade          = Column(Integer)
    valor               = Column(Float,nullable = False)
    imgur_album         = Column(String(255))
    capa                = Column(String(255))
    Tags                = db.relationship("ControleTags",backref="controle_tags")
    Categoria           = db.relationship("Categoria",foreign_keys=id_categoria)

    tagsToAdd = []

    def __init__(self,id_categoria,descricao,sempre_disponivel,quantidade,valor,Tags,imgur_album = None,capa=None):
        self.id_categoria      = id_categoria
        self.descricao         = descricao
        self.sempre_disponivel = sempre_disponivel
        self.quantidade        = quantidade
        self.valor             = valor
        self.imgur_album       = imgur_album
        self.tagsToAdd         = Tags
        self.capa              = capa

    def __repr__(self):
        return "<Produto %r>" % self.id

    def save(self):
        if self.id:
            db.session.commit()
            self.addTags()
        else:
            db.session.add(self)
            db.session.commit()
            self.addTags()

    def addTags(self):
        try:
            if self.tagsToAdd:
                self.removeTags()
                for tag in self.tagsToAdd:
                    ControleTags(self.id,tag).save()
                self.tagsToAdd = []
        except:
            self.delete()
            raise
    
    def removeTags(self):
        for tag in self.Tags:
            tag.delete()
    
    
    def delete(self):
        for tag in self.Tags:
            tag.delete()
        db.session.rollback()
        db.session.delete(self)
        db.session.commit()
        
    
    def toJson(self,schema=None):
        return mallow(schema if schema else ProdutoSchema,self)



class ProdutoSchema(ma.Schema):
    id                = fields.Integer()
    id_categoria      = fields.Integer()
    descricao         = fields.String()
    capa              = fields.String()
    sempre_disponivel = fields.Boolean()
    quantidade        = fields.Integer()
    valor             = fields.Float()
    Tags              = fields.Nested(ControleTagsSchema, many=True)
    Categoria         = fields.Nested(CategoriaSchema)


    
