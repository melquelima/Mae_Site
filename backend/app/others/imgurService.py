import requests
import traceback

class ImgurService:
    url = "https://api.imgur.com/3"

    def __init__(self,client_id,client_secret,refreshToken):
        self.client_secret = client_secret
        self.client_id     = client_id
        self.refreshToken  = refreshToken
        self.token = self.refreshTokenFnc()
        self.header = {"Authorization":f"Bearer {self.token}"}

    def refreshTokenFnc(self):
        payload = {'refresh_token': self.refreshToken,'client_id': self.client_id,'client_secret': self.client_secret,'grant_type': 'refresh_token'}
        response = requests.request("POST", "https://api.imgur.com/oauth2/token",data=payload)
        if not response.status_code == 200:
            return response.status_code,response.text
        return response.json()["access_token"]

    def createAlbum(self,title,capa=None,ids=[]):
        try:
            payload={'title':title,'cover':capa,'ids':ids}
            response = requests.request("POST", f"{self.url}/album", headers=self.header,data=payload)
            if not response.status_code == 200:
                return response.status_code,response.text
            return 200,response.json()["data"]["id"]
        except:
            return 500,traceback.format_exc()

    def getAlbum(self,id): #404 NOT FOUND
        url = f"{self.url}/album/{id}"
        response = requests.request("GET", url, headers=self.header)
        if not response.status_code == 200:
            return response.status_code,response.text
        return 200,response.json()["data"]
    
    def getAlbumImages(self,id):
        url = f"{self.url}/album/{id}/images"
        response = requests.request("GET", url, headers=self.header)
        if not response.status_code == 200:
            return response.status_code,response.text
        return 200,response.json()["data"]

    def uploadImagesToAlbum(self,album,images):
        if self.getAlbum(album)[0] == 404:
            return 404,"ALBUM NOT FOUND!"
        files=[("image",(img["name"],img["stream"],img["content_type"])) for img in images]
        payload={'album': album}        
        response = requests.request("POST", self.url + "/image", headers=self.header,data=payload, files=files)
        if not response.status_code ==200:
            return response.status_code,response.text
        return 200,response.json()["data"]["id"]

    def delImage(self,id):
        url = f"{self.url}/image/{id}"
        response = requests.request("DELETE",url, headers=self.header)
        if not response.status_code ==200:
            return response.status_code,response.text
        return 200,"OK"

    def getImage(self,id):
        url = f"{self.url}/image/{id}"
        response = requests.request("GET", url, headers=self.header)
        if not response.status_code == 200:
            return response.status_code,response.text
        return 200,response.json()["data"]

    def deleteAlbum(self,id):
        album = self.getAlbum(id)
        if album[0] == 404:
            return 404,"ALBUM NOT FOUND!"

        #DELETA CAPA
        del_capa = self.delImage(album[1]["cover"])
        if not del_capa[0] ==200:
            return "DEL_CAPA:" + del_capa[0],del_capa[1]

        #DELETE IMAGENS
        for img in album[1]["images"]:
            del_img = self.delImage(img["id"])
            if not del_img[0] == 200:
                return "DEL_IMAGE:" + del_img[0],del_img[1]

        #DELETE ALBUM
        url = f"{self.url}/album/{id}"
        response = requests.request("DELETE",url, headers=self.header)
        if not response.status_code ==200:
                return response.status_code,response.text
        return 200,"OK"
    
    def uploadImage(self,image):

        payload={'image': image.stream.read()}
        url = f"{self.url}/image"
        response = requests.request("POST", url, headers=self.header, data=payload)
        if not response.status_code ==200:
            return response.status_code,response.text
        return 200,response.json()["data"]["id"]




# class ExportingThread(threading.Thread):
#     def __init__(self,Files,album):
#         self.status = {'status':"OK",'message':None,'progress':0}
#         self.url = "https://imgur-apiv3.p.rapidapi.com/3"
#         self.album = self.createAlbum(album)
#         self.Files = [{"name":x.filename,"content_type":x.content_type,"stream":x.stream.read()} for x in Files]
#         super().__init__()

#     def run(self):
#         try:
#             if self.status["status"] != "OK":return
#             # Your exporting stuff goes here ...
#             payload={'album': self.album[1]}
#             self.status["status"] = "PROCESSING"
#             imgs=[]

#             i = 0
#             for img in self.Files:
#                 files=[('image',(img["name"],img["stream"],img["content_type"]))]
#                 response = requests.request("POST", self.url + "/image", headers=app.config["HEADER_IMGUR"],data=payload, files=files)
#                 if not response.status_code ==200:
#                     self.status["status"] = "ERROR"
#                     self.status["message"] = "ERROR:" + response.text
#                     return
#                 #return json.loads(response.text)

#                 i +=1
#                 imgs.append(Imagem(self.album[0],response.json()["data"]["id"],img["name"]))
#                 self.status["progress"] = i/len(self.Files)
            
#             for i in imgs:
#                 i.save()

#             self.status["status"] = "DONE"
#             self.status["message"] = "UPLOAD COMPLETE"
#         except:
#             self.status["status"] = "ERROR"
#             self.status["message"] = traceback.format_exc()

#     def createAlbum(self,album):
#         try:
#             capa = [] if album.capa == "" else [album.capa]
#             payload={'album': album.album_code,'title':album.nome,'cover':album.capa,'ids':capa}
#             response = requests.request("POST", self.url + "/album", headers=app.config["HEADER_IMGUR"],data=payload)
#             if not response.status_code == 200:
#                 self.status["status"] = "ERROR"
#                 self.status["message"] = "ERROR:" + response.text
#                 return album
#             album.album_code = response.json()["data"]["id"]
#             album.save()
#             return album.id,album.album_code
#         except:
#             self.status["status"] = "ERROR"
#             self.status["message"] = traceback.format_exc()





