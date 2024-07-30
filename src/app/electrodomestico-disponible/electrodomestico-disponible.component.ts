import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-electrodomestico-disponible',
  standalone: true,
  imports: [],
  templateUrl: './electrodomestico-disponible.component.html',
  styleUrl: './electrodomestico-disponible.component.scss'
})
export class ElectrodomesticoDisponibleComponent {

  @Input() data: any;


}
