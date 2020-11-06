import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.scss']
})
export class DinamicFormComponent implements OnInit {
  dinamicForms: FormGroup;

  @Output() sendArray = new EventEmitter();
  @Output() disabledForm = new EventEmitter();

  constructor(
    public formBuilder: FormBuilder,
  ) {
    this.dinamicForms = this.formBuilder.group({
      dinamic: new FormArray([])
    });
  }

  ngOnInit(): void {
    this.insetOne();
  }

  get df(): any { return this.dinamicForms.controls; }
  get d(): any { return this.df.dinamic as FormArray; }

  insetOne(): any {
    this.d.push(this.formBuilder.group({
      dinamic_names: ''
    }));
  }

  addField(): any {

    this.d.push(this.formBuilder.group({
      dinamic_names: ''
    }));

  }

  removeField(index: number): any {

    if (index !== 0) {

      this.d.removeAt(index);

    }

    return index;

  }

  envForm(data): any {

    if (data[0].dinamic_names.length < 3) {
      alert('Preencha com um nome de no minimo 3 caracteres');
      return;
    }

    this.sendArray.emit(data);
    this.disabledForm.emit(false);

    while (this.d.length !== 0) {
      this.d.removeAt(0);
    }

    this.insetOne();

  }

}
