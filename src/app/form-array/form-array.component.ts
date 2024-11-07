import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DinamicFormComponent } from './dinamic-form/dinamic-form.component';
import { ListDinamicFormComponent } from './list-dinamic-form/list-dinamic-form.component';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    DinamicFormComponent,
    ListDinamicFormComponent
  ]
})
export class FormArrayComponent {
  formActive = false;
  listActive = false;
  sendArray: any;

  openForm(value: any) {
    this.formActive = value[0];
    this.listActive = value[1];
  }

  getNames(data: any) {
    this.sendArray = data;
    this.listActive = true;
  }

}
