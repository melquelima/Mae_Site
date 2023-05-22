import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { PresentationComponent } from "./pages/presentation/presentation.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: "produtos",
        loadChildren: () => import('./pages/produtos/produtos.module').then(m => m.ProdutosModule)

      },
      {
        path: "dashboard",
        loadChildren: () => import('./pages/dashboards/dashboards.module').then(m => m.DashboardsModule)

      },
      {
        path: "components",
        loadChildren: () => import('./pages/components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: "forms",
        loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormsModules)
      },
      {
        path: "tables",
        loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: "maps",
        loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule)
      },
      {
        path: "widgets",
        loadChildren: () => import('./pages/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: "charts",
        loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule)
      },
      {
        path: "calendar",
        loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule)
      },
      {
        path: "examples",
        loadChildren: () => import('./pages/examples/examples.module').then(m => m.ExamplesModule)
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "auth",
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
