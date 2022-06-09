import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotasFormComponent } from './flotas-form.component';

describe('FlotasFormComponent', () => {
  let component: FlotasFormComponent;
  let fixture: ComponentFixture<FlotasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlotasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
