import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Criamos um array para quando acessarmos o localhost:4200 sermos direcionados para a tela de login
export const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
