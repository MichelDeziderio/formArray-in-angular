import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDinamicFormComponent } from './list-dinamic-form.component';

describe('ListDinamicFormComponent', () => {
  let component: ListDinamicFormComponent;
  let fixture: ComponentFixture<ListDinamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListDinamicFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDinamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test EventEmitter disabledForm', () => {
    const componentBtn = fixture.componentInstance;
    spyOn(componentBtn.disabledForm, 'emit');

    const value = [ true, false ];

    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(componentBtn.disabledForm.emit).toHaveBeenCalledWith(value);
  });
});
