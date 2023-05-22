from app import db,ma
from sqlalchemy import Float,Column,Integer,String,ForeignKey,DateTime,Time,Boolean,Date
from datetime import datetime,date,timedelta
from marshmallow import Schema, fields

from app.others.mallow import mallow

class Categoria(db.Model):
    __tablename__ = "categorias"

    id                  = Column(Integer,primary_key=True)
    categoria            = Column(String(255),nullable = False)
    tipo               = Column(String(255),nullable = False)

    def __init__(self,categoria,tipo):
        self.categoria = categoria
        self.tipo    = tipo

    def __repr__(self):
        return "<Categoria %r>" % self.id

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.rollback()
        db.session.delete(self)
        db.session.commit()
    
    def toJson(self,schema=None):
        return mallow(schema if schema else CategoriaSchema,self)



class CategoriaSchema(ma.Schema):
    id       = fields.Integer()
    categoria = fields.String()
    tipo      = fields.String()
