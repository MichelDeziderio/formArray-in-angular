import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayComponent } from './form-array.component';

describe('FormArrayComponent', () => {
  let component: FormArrayComponent;
  let fixture: ComponentFixture<FormArrayComponent>;

  const dataReturn  = [
    {dinamic_name: 'Mohammed'},
    {dinamic_name: 'Arnould'},
    {dinamic_name: 'Medina'},
    {dinamic_name: 'Lilou'}
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormArrayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openForm pass false with param and return false in formActive', () => {
    component.openForm(false);
    expect(component.formActive).toBeFalse();
  });
  
  it('openForm pass true with param and return true in formActive', () => {
    component.openForm(true);
    expect(component.formActive).toBeTruthy();
  });

  it('getNames pass dataReturn with param and return array', () => {
    component.getNames(dataReturn);
    expect(component.sendArray).toEqual(dataReturn);
  });


});
