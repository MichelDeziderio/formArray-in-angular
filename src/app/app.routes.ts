import { Routes } from '@angular/router';
import { FormArrayComponent } from './form-array/form-array.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: FormArrayComponent },
];
