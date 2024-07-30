import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() edit = new EventEmitter<any>();

  editar(item: any) {
    this.edit.emit(item);
  }
}
