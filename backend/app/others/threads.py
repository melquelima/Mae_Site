import traceback
from app import app,imgur
import threading
from app.others.imgurService import ImgurService


class ExportingThread(threading.Thread):
    def __init__(self,Files,album,produto,FileCapa=None):
        self.produto = produto
        self.status = {'status':"OK",'message':None,'progress':0}
        self.album_code = self.createAlbum(album,FileCapa)
        self.Files = [{"name":x.filename,"content_type":x.content_type,"stream":x.stream.read()} for x in Files]
        super().__init__()

    def run(self):
        try:
            if self.status["status"] != "OK":return
            # Your exporting stuff goes here ...
            #============================================== CAPA
            
            #============================================== ARQUIVOS

            self.status["status"] = "PROCESSING"
            imgs=[]

            i = 0
            for img in self.Files:
                response = imgur.uploadImagesToAlbum(self.album_code,[img])
                if not response[0] ==200:
                    self.status["status"] = "ERROR"
                    self.status["message"] = "ERROR:" + response[1]
                    return
                #return json.loads(response.text)
                i +=1
                # with app.app_context():
                #     imgs.append(Imagem(self.album[0],response[1],img["name"]))
                self.status["progress"] = i/len(self.Files)
            
            # with app.app_context():
            #     for i in imgs:
            #         i.save()

            self.status["status"] = "DONE"
            self.status["message"] = "UPLOAD COMPLETE" 
        except:
            self.status["status"] = "ERROR"
            self.status["message"] = traceback.format_exc()

    def createAlbum(self,nome,capa):
        try:

            if self.produto.imgur_album: return self.produto.imgur_album

            capaCode = None
            if capa:
                response = imgur.uploadImage(capa)
                if not response[0] ==200:
                    self.status["status"] = "ERROR"
                    self.status["message"] = "ERROR:" + response[1]
                    return
                capaCode = response[1]
                self.produto.capa = capaCode
                self.produto.save()

        
            response = imgur.createAlbum(nome,capaCode,capaCode)
            if not response[0] == 200:
                self.status["status"] = "ERROR"
                self.status["message"] = "ERROR:" + response[1]
            print("album code:",response[1])
            
            self.produto.imgur_album =response[1]
            self.produto.save()
            return response[1]
        except:
            self.status["status"] = "ERROR"
            self.status["message"] = traceback.format_exc()


    def setAlbumCapa(self,album_code):
        if self.fileCapa:
            response = imgur.up(album_code,self.fileCapa)
            if not response[0] ==200:
                raise response[1]
                self.status["status"] = "ERROR"
                self.status["message"] = "ERROR:" + response[1]
                return
