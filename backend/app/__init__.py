from flask import Flask
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from app.others.imgurService import ImgurService
#from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config.from_object('config')
cors = CORS(app,resources={r'*':{'origins':'http://localhost:4200'}})
ma = Marshmallow(app)
db = SQLAlchemy(app)
imgur = ImgurService(app.config["CLIENT_ID"],app.config["CLIENT_SECRET"],app.config["REFRESHTOKEN"])

# jwt = JWTManager(app)


from app.controllers import *
from app.controllers.auth import *
from app.controllers.categorias import *
from app.controllers.tags import *
from app.controllers.produto import *

from app.models.DB.produto import *

from app.models.DB.Tag import *
from app.models.DB.controle_tags import *


a = 1