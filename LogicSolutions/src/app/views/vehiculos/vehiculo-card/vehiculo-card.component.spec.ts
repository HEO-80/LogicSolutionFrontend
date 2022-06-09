import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoCardComponent } from './vehiculo-card.component';

describe('VehiculoCardComponent', () => {
  let component: VehiculoCardComponent;
  let fixture: ComponentFixture<VehiculoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});