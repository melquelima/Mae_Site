from datetime import timedelta

DEBUG = True
SQLALCHEMY_TRACK_MODIFICATIONS = True
CORS_HEADERS = 'Content-Type'
SECRET_KEY = "asdjkgasd$#43"

DRIVER = "ODBC+Driver+17+for+SQL+Server"

USER,PWD,SERVER,DB,PORT = ('postgres','qwerty333','192.168.15.22','postgres',5432) 

SQLALCHEMY_DATABASE_URI     = f"postgresql+psycopg2://{USER}:{PWD}@{SERVER}:{PORT}/{DB}"


IMGURTOKEN='fcad22042098037c0bf9ae0cd9e0043bb1f74949'
IMGURRAPIDAPI = '7bf6023dfcmshb3b15b755729d55p1eca04jsndf0bedab0df5'


REFRESHTOKEN = "342eee62f892e61b2efcafb59ccc5c2f294d1d9f"
CLIENT_ID = "77810a977dd5e5d"
CLIENT_SECRET = "fcad22042098037c0bf9ae0cd9e0043bb1f74949"
