import { Routes } from "@angular/router";
import { ProdutoComponent } from "./produto/produto.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { TagsComponent } from "./tags/tags.component";
import { PesquisarComponent } from "./pesquisar/pesquisar.component";

export const ProdutosRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "pesquisar",
        component: PesquisarComponent
      },
      {
        path: "new",
        component: ProdutoComponent
      },
      {
        path: ":id/view",
        component: ProdutoComponent
      },
      {
        path: ":id/edit",
        component: ProdutoComponent
      },
      {
        path: "categorias",
        component: CategoriasComponent
      }
      ,{
        path: "tags",
        component: TagsComponent
      }
    ]
  }
];
