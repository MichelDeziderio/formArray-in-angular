import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';

const routes: Routes = [
  {path: 'form-array', component: FormArrayComponent},
  { path: '', redirectTo: '/form-array', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
