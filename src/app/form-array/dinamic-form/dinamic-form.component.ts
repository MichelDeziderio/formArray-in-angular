import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    ReactiveFormsModule,
    
  ]
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

  insetOne() {
    this.d.push(this.formBuilder.group({
      dinamic_names: ''
    }));
  }

  addField() {
    this.d.push(this.formBuilder.group({
      dinamic_names: ''
    }));
  }

  removeField(index: number) {
    if (index !== 0) {
      this.d.removeAt(index);
    }
    return index;
  }

  envForm(data: any) {
    console.log('data', data[0].controls);

    if (data[0].dinamic_names.length < 3) {
      alert('Preencha com um nome de no minimo 3 caracteres');
      return;
    }

    this.sendArray.emit(data);
    this.disabledForm.emit([false, true]);

    while (this.d.length !== 0) {
      this.d.removeAt(0);
    }

    this.insetOne();

  }

}
