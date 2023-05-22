from app import db,ma
from sqlalchemy import Float,Column,Integer,String,ForeignKey,DateTime,Time,Boolean,Date
from datetime import datetime,date,timedelta
from marshmallow import Schema, fields

from app.others.mallow import mallow

class Tag(db.Model):
    __tablename__ = "tags"

    id   = Column(Integer,primary_key=True)
    tag = Column(String(255),nullable = False)
    enabled = Column(Boolean,nullable = False)

    def __init__(self,tag,enabled):
        self.tag     = tag
        self.enabled = enabled

    def __repr__(self):
        return "<tag %r>" % self.id

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def delete(self):
        db.session.rollback()
        db.session.delete(self)
        db.session.commit()
    
    def toJson(self,schema=None):
        return mallow(schema if schema else TagSchema,self)



class TagSchema(ma.Schema):
    id      = fields.Integer()
    tag     = fields.String()
    enabled = fields.Boolean()
