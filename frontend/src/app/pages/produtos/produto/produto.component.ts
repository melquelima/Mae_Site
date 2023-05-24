import { Component, OnInit } from '@angular/core';
import Selectr from "mobius1-selectr";
import Dropzone from "dropzone";
import { AlertService } from 'src/app/services/alert.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/models/produto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria.model';
import { SnackBarService } from 'src/app/services/snackbar.service';
import { Tag } from 'src/app/models/tag.model';
import { TagService } from 'src/app/services/tag.service';
import { Observable, interval } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
Dropzone.autoDiscover = false;

@Component({
  selector: 'app-novo',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  sempre_disponivel = false;
  titles            = {'view':'Produto','edit':'Editar Produto','new':'Novo Produto'}
  files             = []
  drp               = null
  drp_capa          = null
  categorias        = []
  categoria         = null
  selectorMultiple  = null
  tags              = []
  tagSelected       = null
  cadastrando       = false
  progress          = 0
  prod_id           = this.route.snapshot.paramMap.get('id')
  mode              = this.router.url.split("/")[this.router.url.split("/").length-1]
  slides            = []
  title             = this.titles[this.mode]
  subscribe: any
  produto  : Produto = new Produto()
  obs_tags = null

  constructor(
    private alertService:AlertService,
    private produtoService:ProdutoService,
    private categoriaService:CategoriaService,
    private tagService:TagService,
    private snackBar:SnackBarService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
  }

  ngOnInit(): void {
    this.initDropZone();
    this.initDropZone_Capa();

    if(this.mode == 'new'){
      this.carregaCategorias();
    }
    if(this.mode == 'view'){
      this.loadProduto(this.prod_id)
      this.initImages(this.prod_id)
    }
    if(this.mode == 'edit'){
      console.log("EDIT")
      this.carregaCategorias();
      this.loadProduto(this.prod_id)
      this.initImages(this.prod_id)
    }
    
    
  }

  initTags(data,disabled=false):void{

    var optionsMultiple = { multiple: true,defaultSelected: false,placeholder:"Selecione algumas tags...",data:data,disabled:disabled };
   
    var selectrmultiple: any = document.getElementById("selectr-multiple");

    this.selectorMultiple = new Selectr(selectrmultiple, optionsMultiple);
  }

  initDropZone():void{
    let currentMultipleFile = undefined;
    // multiple dropzone file - accepts any type of file
    if (this.drp != null) this.drp.destroy()
    console.log("FOI")
    this.drp = new Dropzone(document.getElementById("dropzone-multiple"), {
      url: "https://",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementById("dz-preview-multiple"),
      previewTemplate: document.getElementById("dz-preview-multiple").innerHTML,
      maxFiles: 30,
      acceptedFiles: null,
      init: function() {
        // this.on("addedfile", function(file) {
        //   if (currentMultipleFile) {
        //    console.log(this.files)
        //   }
        //   currentMultipleFile = file;
        // });
        // this.on("removedfile", function(file) {
        //   if (currentMultipleFile) {
        //    console.log("removed")
        //   }
        //   currentMultipleFile = file;
        // });
      }
    });
    document.getElementById("dz-preview-multiple").innerHTML = "";
  }

  initDropZone_Capa():void{
    let currentMultipleFile = undefined;
    // multiple dropzone file - accepts any type of file
    if (this.drp_capa != null) return
    this.drp_capa = new Dropzone(document.getElementById("dropzone-multiple-capa"), {
      url: "https://",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementById("dz-preview-multiple-capa"),
      previewTemplate: document.getElementById("dz-preview-multiple-capa").innerHTML,
      maxFiles: 1,
      acceptedFiles: null,
      init: function() {
        // this.on("addedfile", function(file) {
        //   if (currentMultipleFile) {
        //    console.log(this.files)
        //   }
        //   currentMultipleFile = file;
        // });
        // this.on("removedfile", function(file) {
        //   if (currentMultipleFile) {
        //    console.log("removed")
        //   }
        //   currentMultipleFile = file;
        // });
      }
    });
    document.getElementById("dz-preview-multiple-capa").innerHTML = "";
  }

  carregaCategorias():void{
    this.alertService.loading("Carregando Categorias.....")
    this.categoriaService.getCategorias().subscribe((cats: Categoria[]) => {
        this.categorias = cats
        return this.carregaTags();
      })
  }
  carregaTags():void{
    this.alertService.loading("Carregando Tags.....")
    this.obs_tags =  this.tagService.getTags()
    if(this.mode == "new" || this.mode == "edit"){
      this.obs_tags.subscribe((tags: Tag[]) => {
        this.tags = tags
        this.initTags(tags.map(x=>({text:x.tag,value:x.tag})));
        this.alertService.closeLoading()
      })
    }
    
  }

  addTag():void{
    if(this.selectorMultiple){
      this.produto.Tags = this.selectorMultiple.selectedIndexes.map(x=>this.tags[x].id)
    }
  }

  valida_produto():boolean{
    if(!this.produto.id_categoria){this.snackBar.Warning("por favor selecione uma categoria e tipo!");return false}
    if((this.produto.descricao||"").trim() == ""){this.snackBar.Warning("por favor insira uma descrição!");return false}
    if(!this.produto.valor){this.snackBar.Warning("por favor insira um valor!");return false}
    if(!this.produto.sempre_disponivel && !this.produto.quantidade){this.snackBar.Warning("por favor insira uma quantidade!");return false}
    if(!this.drp.files){this.snackBar.Warning("por favor insira a imagem do seu produto!");return false}

    return true
  }

  cadastrar():void{
    if(this.valida_produto()){
      this.produtoService.novo_produto(this.produto,this.drp_capa.files,this.drp.files).subscribe((a:any)=>{
        this.cadastrando = true
        this.waitImageLoads(a,"Produto cadastrado com sucesso!")
      },err=>{
        console.log("====>",err)
        this.progress = 0
        this.cadastrando = false
      })
      
    }
  }

  editar():void{
    if(this.valida_produto()){
      this.produto.Tags = this.selectorMultiple.selectedIndexes.map(x=>this.tags[x].id)
      this.produtoService.editar_produto(this.produto,this.drp.files).subscribe((a:any)=>{
        if(a.threadId){
          this.waitImageLoads(a,"Produto editado com sucesso!")
        }else{
          this.snackBar.Success("Produto editado com sucesso!")
          this.router.navigate([`/produtos/${a.id_produto}/view`])
        }
      })
      
    }
  }

  waitImageLoads(data,msg):void{
 
    this.subscribe = interval(1000).subscribe((func => {
      this.produtoService.progress(data.threadId).subscribe((a:any)=>{
        this.progress = a.progress*100
        // if(a.status != "PROCESSING"){
        //   console.log("1")
        //   this.subscribe.unsubscribe()
        //   this.progress = 0
        // }
        if(a.status == "DONE"){
          this.subscribe.unsubscribe()
          this.snackBar.Success(msg)
          this.router.navigate([`/produtos/${data.id_produto}/view`])
          this.cadastrando = false
          
        }
        if(a.status == "ERROR"){
          this.snackBar.Danger(a.message)
        }
      },err=>{
        this.snackBar.Danger(err.error)
        this.subscribe.unsubscribe()
      })
    }))
  }

  loadProduto(id):void{
    this.alertService.loading("Procurando Produto.....")
    this.produtoService.getProduto(id).subscribe((produto:Produto)=>{
      if(this.mode == "view"){
        this.initTags(produto.Tags.map(x=>({text:x.tag,value:x.tag,selected: true})),true)
        this.categorias = [produto.Categoria]
      }
      if(this.mode == "edit"){
        this.obs_tags.subscribe((tags: Tag[]) => {
          var selectedTags = produto.Tags.map(x=>x.tag)
          this.tags = tags
          this.initTags(tags.map(x=>({text:x.tag,value:x.tag,selected:selectedTags.includes(x.tag)})));
          this.alertService.closeLoading()
        })
      }

      this.categoria = produto.Categoria.categoria
      this.produto = produto
      
      
      this.alertService.closeLoading()
    })
  }

  initImages(id):void{
    this.produtoService.getImages(id).subscribe((a:any)=>{
      this.slides = a
      
    },err=>{
      console.log(err)
    })
    
  }


  makeCover(image):void{
    this.alertService.confirm("Opa!","Deseja realmente alterar a capa?").then(res=>{
      if (res.isConfirmed){
        this.alertService.loading("Alterando Capa...")
        this.produtoService.changeCover(this.produto.id,image).subscribe((changed:Produto)=>{
          this.alertService.closeLoading()
          this.produto = changed
          this.alertService.success("Show","Capa alterada com sucesso!")
        })
      }
  })
  }


  openImage(img){
    Swal.fire({
      imageUrl:'https://i.imgur.com/' + img + '.jpg',
      imageWidth: '100%',
      showConfirmButton: false,
    })
  }

  removeImage(img):void{
    this.alertService.loading("Apagando imagem.....")
    this.produtoService.deleteImage(img).subscribe((a:any)=>{
      var idx = this.slides.indexOf(img)
      this.slides.splice(idx, 1)
      
      this.alertService.closeLoading()
      this.snackBar.Success("Imagem removida com sucesso!")
    })
    
  }

  navigate(route):void{

    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //this.router.navigate(["/produtos/" + route]);
    this.mode= "edit"
    this.carregaCategorias();

    
      
  }

}
