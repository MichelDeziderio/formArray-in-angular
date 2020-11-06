import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-dinamic-form',
  templateUrl: './list-dinamic-form.component.html',
  styleUrls: ['./list-dinamic-form.component.scss']
})
export class ListDinamicFormComponent implements OnInit {

  @Input() receiveArray;
  @Output() disabledForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enableForm(value: boolean): void {
    this.disabledForm.emit(value);
  }

}
