import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario/formulario.component';
import { EditarFormularioComponent } from './editar-formulario/editar-formulario.component';
import { TablaComponent } from './tabla/tabla.component';


const routes: Routes = [
  { path: 'formulario', component: FormularioComponent},
  { path: 'editar-formulario', component: EditarFormularioComponent},
  { path: 'tabla', component: TablaComponent }
  
  //{ path: '**', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
