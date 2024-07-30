import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectrodomesticoEditComponent } from './electrodomestico-edit.component';

describe('ElectrodomesticoEditComponent', () => {
  let component: ElectrodomesticoEditComponent;
  let fixture: ComponentFixture<ElectrodomesticoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectrodomesticoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectrodomesticoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
