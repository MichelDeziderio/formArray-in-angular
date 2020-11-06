import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DinamicFormComponent } from './form-array/dinamic-form/dinamic-form.component';
import { ListDinamicFormComponent } from './form-array/list-dinamic-form/list-dinamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    DinamicFormComponent,
    ListDinamicFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
