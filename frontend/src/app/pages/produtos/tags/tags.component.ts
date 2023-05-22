import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag.model';
import { AlertService } from 'src/app/services/alert.service';
import { CustomAlertService } from 'src/app/services/alert_custom.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  entries: number = 10;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = []


  constructor(
    private alerService: AlertService,
    private tagService:TagService,
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
    this.alerService.loading("Carregando Tags.....")
    this.tagService.getTags().subscribe((tags: Tag[]) => {
      this.rows = tags
      this.loadData(this.rows)
      this.alerService.closeLoading()
    })
  }

  delete(row):void{

    this.alerService.confirm("Opa!","Deseja realmente deletar essa tag?").then(res=>{
      if (res.isConfirmed){
        this.alerService.loading("Deletanto Tag...")
        this.tagService.deleteTag(row.id).subscribe((removed:Tag)=>{
          this.alerService.closeLoading()
          this.rows = this.rows.filter((x=>{if(x.id != removed.id){return x}}))
          this.loadData(this.rows)
          this.alerService.success("Show","Tag deletada com sucesso!")
        })
        console.log(row)
      }
  })
  }

  novaTag(){
    this.customAlerts.NewTag().then(res=>{
      if (res.isConfirmed){
        this.alerService.confirm("Confirmando","Deseja criar a tag '" + res.value.tag + "' ?").then(conf=>{
          if (conf.isConfirmed){
            this.alerService.loading("Criando Tag...")
            this.tagService.addTag(res.value.tag).subscribe((newTag:Tag)=>{
              this.alerService.closeLoading()
              this.rows.push(newTag)
              this.loadData(this.rows)
              this.alerService.success("Show","Tag criada com sucesso!")
            })
            console.log(res)

          }
        })
      }
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

}
