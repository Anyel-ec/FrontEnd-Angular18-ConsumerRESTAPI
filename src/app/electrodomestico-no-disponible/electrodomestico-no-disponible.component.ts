import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-electrodomestico-no-disponible',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './electrodomestico-no-disponible.component.html',
  styleUrl: './electrodomestico-no-disponible.component.scss'
})
export class ElectrodomesticoNoDisponibleComponent {
  @Input() data: any;
  @Input() message: any;
}
