import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibilidadEditComponent } from './components/disponibilidad/disponibilidad-edit.component';
import { DisponibilidadQueryComponent} from './components/disponibilidad/disponibilidad-query.component';

const routes: Routes = [
  { path: 'disponibilidad-query', component: DisponibilidadQueryComponent },
  { path: 'disponibilidad-edit', component: DisponibilidadEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [DisponibilidadEditComponent, DisponibilidadQueryComponent]