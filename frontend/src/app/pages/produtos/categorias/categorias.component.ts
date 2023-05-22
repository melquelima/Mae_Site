import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { AlertService } from 'src/app/services/alert.service';
import { CustomAlertService } from 'src/app/services/alert_custom.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []


  constructor(
    private alerService: AlertService,
    private categoriaService:CategoriaService,
    private customAlerts:CustomAlertService
  ) { 

  }

  ngOnInit(): void {
    this.carregaCategorias()
  }

  loadData(data) {
    this.temp = data.map((prop, key) => {
      return {
        ...prop,
        // id: key
      };
    });
  }


  carregaCategorias(){
    this.alerService.loading("Carregando Categorias.....")
    this.categoriaService.getCategorias().subscribe((cats: Categoria[]) => {
      this.rows = cats
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
        const v = typeof d[key] == 'number' ? d[key].toString() : d[key]
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

    this.alerService.confirm("Opa!","Deseja realmente deletar essa categoria?").then(res=>{
      if (res.isConfirmed){
        this.alerService.loading("Deletanto Categoria...")
        this.categoriaService.deleteCategoria(row.id).subscribe((removed:Categoria)=>{
          this.alerService.closeLoading()
          this.rows = this.rows.filter((x=>{if(x.id != removed.id){return x}}))
          this.loadData(this.rows)
          this.alerService.success("Show","Categoria deletada com sucesso!")
        })
        console.log(row)
      }
  })
  }

  novaCategoria(){
    this.customAlerts.NewCategoria(this.rows).then(res=>{
      if (res.isConfirmed){
        this.alerService.loading("Criando Categoria...")
        this.categoriaService.addCategoria(res.value.categoria,res.value.tipo).subscribe((newCategoria:Categoria)=>{
          this.alerService.closeLoading()
          this.rows.push(newCategoria)
          this.loadData(this.rows)
          this.alerService.success("Show","Categoria criada com sucesso!")
        })
        console.log(res)
      }
  })
  }


}


