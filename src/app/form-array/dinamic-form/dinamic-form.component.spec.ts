import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DinamicFormComponent } from './dinamic-form.component';

describe('DinamicFormComponent', () => {
  let component: DinamicFormComponent;
  let fixture: ComponentFixture<DinamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DinamicFormComponent,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test function removeField', () => {
    expect(component.removeField(0)).toBe(0);
    expect(component.removeField(1)).toBe(1);
  });

  it('Test function addField', () => {
    const initLength = component.d.length;
    component.addField();
    expect(component.d.length).toBeGreaterThan(initLength);
  });

  it('Test function envForm', () => {
    let dataOut: any = [];
    component.sendArray.subscribe(data => dataOut = data);
    component.d.controls[0].setValue({ dinamic_names: 'abc' });
    component.envForm(component.d.value);
    expect(dataOut[0].dinamic_names).toEqual('abc');
  });

  it('Test function envForm less than 3 caracters', () => {
    component.addField();
    component.d.controls[0].setValue({ dinamic_names: 'ab' });
    spyOn(window, 'alert')
    component.envForm(component.d.value);
    expect(window.alert).toHaveBeenCalled();
  });

});
