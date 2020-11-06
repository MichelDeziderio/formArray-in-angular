import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  formActive = true;
  sendArray: any;

  constructor() { }

  ngOnInit(): void {
  }

  openForm(value): void {
    this.formActive = value;
  }

  getNames(data): void {
    this.sendArray =  data;
  }

}
