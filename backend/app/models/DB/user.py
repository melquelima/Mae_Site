from app import db,ma
from sqlalchemy import Float,Column,Integer,String,ForeignKey,DateTime,Time,Boolean,Date
from datetime import datetime,date,timedelta
from marshmallow import Schema, fields

from app.others.mallow import mallow

class User(db.Model):
    __tablename__ = "usuarios"

    id                  = Column(Integer,primary_key=True)
    username            = Column(String(255),nullable = False,unique=True)
    senha               = Column(String(255),nullable = False)
    is_admin            = Column(Boolean,nullable = False)

    def __init__(self,username,senha):
        self.username = username
        self.senha    = senha

    def __repr__(self):
        return "<User %r>" % self.id

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def toJson(self,schema=None):
        return mallow(schema if schema else UserSchema,self)



class UserSchema(ma.Schema):
    id       = fields.Integer()
    username = fields.String()
    email    = fields.String()
