import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticoDisponibleComponent } from './electrodomestico-disponible.component';

describe('ElectrodomesticoDisponibleComponent', () => {
  let component: ElectrodomesticoDisponibleComponent;
  let fixture: ComponentFixture<ElectrodomesticoDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectrodomesticoDisponibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectrodomesticoDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
