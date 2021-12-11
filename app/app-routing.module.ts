import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { navbarRoute } from './layouts/navbar/navbar.route';
const LAYOUT_ROUTES = [navbarRoute];
const appRoutes: Routes = [

  {
    path: 'astrologa',
    loadChildren: './astrologa/astrologa.module#AstrologaModule'
  },
  {
    path: 'servicos',
    loadChildren: './servicos/servicos.module#ServicosModule'
  },
  {
    path: 'manu',
    loadChildren: './manu/manu.module#ManuModule'
  },
  {
    path: 'contatos',
    loadChildren: './contatos/contatos.module#ContatosModule'
  },
  ...LAYOUT_ROUTES
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
