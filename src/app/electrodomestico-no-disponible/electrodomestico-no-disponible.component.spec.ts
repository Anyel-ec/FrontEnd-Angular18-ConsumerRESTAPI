import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticoNoDisponibleComponent } from './electrodomestico-no-disponible.component';

describe('ElectrodomesticoNoDisponibleComponent', () => {
  let component: ElectrodomesticoNoDisponibleComponent;
  let fixture: ComponentFixture<ElectrodomesticoNoDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectrodomesticoNoDisponibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectrodomesticoNoDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
