import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-electrodomestico-no-disponible',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './electrodomestico-no-disponible.component.html',
  styleUrl: './electrodomestico-no-disponible.component.scss'
})
export class ElectrodomesticoNoDisponibleComponent {
  @Input() data: any;
  @Input() message: any;
  @Output() edit = new EventEmitter<any>();

  editar(item: any) {
    this.edit.emit(item);
  }
}
