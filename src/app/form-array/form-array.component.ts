import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  formActive = false;
  listActive = false;
  sendArray: any;

  constructor() { }

  ngOnInit(): void {
  }

  openForm(value): void {
    this.formActive = value[0];
    this.listActive = value[1];
  }

  getNames(data): void {
    this.sendArray =  data;
    this.listActive = true;
  }

}
