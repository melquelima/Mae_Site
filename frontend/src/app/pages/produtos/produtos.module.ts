import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutosRoutes } from './produtos.routing';
import { FormsModule } from '@angular/forms';
import { ProdutoComponent } from './produto/produto.component';
import { CarouselModule } from 'ngx-magic-carousel';
import { CategoriasComponent } from './categorias/categorias.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipesModule } from 'src/app/pipes-m/pipes-m.module';
import { TagsComponent } from './tags/tags.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';


@NgModule({
  declarations: [
    ProdutoComponent,
    CategoriasComponent,
    TagsComponent,
    PesquisarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    CarouselModule,
    PipesModule,
    RouterModule.forChild(ProdutosRoutes),
  ]
})
export class ProdutosModule { }
