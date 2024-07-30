import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticoPocoDisponibleComponent } from './electrodomestico-poco-disponible.component';

describe('ElectrodomesticoPocoDisponibleComponent', () => {
  let component: ElectrodomesticoPocoDisponibleComponent;
  let fixture: ComponentFixture<ElectrodomesticoPocoDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectrodomesticoPocoDisponibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectrodomesticoPocoDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
