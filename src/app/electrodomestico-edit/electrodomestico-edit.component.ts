import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElectrodomesticoService } from '../services/electrodomestico.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-electrodomestico-edit',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './electrodomestico-edit.component.html',
  styleUrls: ['./electrodomestico-edit.component.scss']
})
export class ElectrodomesticoEditComponent {
  @Input() data: any;
  @Output() updated = new EventEmitter<void>();

  cantidad: number = 0;

  constructor(private electrodomesticoService: ElectrodomesticoService) {}

  ngOnInit(): void {
    this.cantidad = this.data.cantidad;
  }

  updateElectrodomestico(): void {
    this.electrodomesticoService.updateElectrodomestico(this.data.id_electrodomestico, this.cantidad).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Actualizado',
          text: 'Electrodoméstico actualizado correctamente'
        });
        this.updated.emit();
      },
      (error) => {
        console.error('Error updating data:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error actualizando el electrodoméstico'
        });
      }
    );
  }
}
