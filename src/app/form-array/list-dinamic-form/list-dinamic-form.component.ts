import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-dinamic-form',
  templateUrl: './list-dinamic-form.component.html',
  styleUrls: ['./list-dinamic-form.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ]
})
export class ListDinamicFormComponent {

  @Input() receiveArray: any;
  @Output() disabledForm = new EventEmitter();


  enableForm(value: any, value2: boolean) {
    this.disabledForm.emit([value, value2]);
  }

}
