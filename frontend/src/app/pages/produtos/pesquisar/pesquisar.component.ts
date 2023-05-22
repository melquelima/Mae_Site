import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { AlertService } from 'src/app/services/alert.service';
import { ProdutoService } from 'src/app/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []


  constructor(
    private alerService: AlertService,
    private produtoService:ProdutoService
  ) { 

  }

  ngOnInit(): void {
    this.carregaProdutos()
  }

  loadData(data) {
    this.temp = data.map((prop, key) => {
      return {
        ...prop,
        // id: key
      };
    });
  }


  carregaProdutos(){
    this.alerService.loading("Carregando Produtos.....")
    this.produtoService.getProdutos().subscribe((prods: Produto[]) => {
      this.rows = prods.map(x=>({id:x.id,capa:x.capa,categoria:x.Categoria.categoria,tipo:x.Categoria.tipo,descricao:x.descricao,sempre_disponivel:x.sempre_disponivel,valor:x.valor}))
      console.log(this.rows)
      this.loadData(this.rows)
      this.alerService.closeLoading()
    })
  }


  entriesChange($event) {
    this.entries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        const v = typeof d[key] == 'number' || typeof d[key] == 'boolean' ? d[key].toString() : d[key]
        if (v.toLowerCase().indexOf(val.toLowerCase()) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
  onActivate(event) {
    this.activeRow = event.row;
  }


  delete(row):void{

    this.alerService.confirm("Opa!","Deseja realmente deletar esse produto?").then(res=>{
      if (res.isConfirmed){
        this.alerService.loading("Deletanto Produto...")
        this.produtoService.delete(row.id).subscribe((removed:Produto)=>{
          this.alerService.closeLoading()
          this.rows = this.rows.filter((x=>{if(x.id != removed.id){return x}}))
          this.loadData(this.rows)
          this.alerService.success("Show","Produto deletado com sucesso!")
        })
        console.log(row)
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

}
