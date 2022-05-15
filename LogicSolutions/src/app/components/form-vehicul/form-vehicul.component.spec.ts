import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehiculComponent } from './form-vehicul.component';

describe('FormVehiculComponent', () => {
  let component: FormVehiculComponent;
  let fixture: ComponentFixture<FormVehiculComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVehiculComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVehiculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
