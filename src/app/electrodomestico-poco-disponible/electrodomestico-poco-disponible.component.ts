import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-electrodomestico-poco-disponible',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './electrodomestico-poco-disponible.component.html',
  styleUrl: './electrodomestico-poco-disponible.component.scss'
})
export class ElectrodomesticoPocoDisponibleComponent {
  @Input() data: any;
  @Input() message: any;
}
