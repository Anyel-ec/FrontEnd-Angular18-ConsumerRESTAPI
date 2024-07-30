import { Component } from '@angular/core';
import { ElectrodomesticoService } from '../../services/electrodomestico.service';
import { ElectrodomesticoDisponibleComponent } from '../../electrodomestico-disponible/electrodomestico-disponible.component';
import { ElectrodomesticoPocoDisponibleComponent } from '../../electrodomestico-poco-disponible/electrodomestico-poco-disponible.component';
import { ElectrodomesticoNoDisponibleComponent } from '../../electrodomestico-no-disponible/electrodomestico-no-disponible.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search-code',
  standalone: true,
  imports: [CommonModule, ElectrodomesticoDisponibleComponent, ElectrodomesticoPocoDisponibleComponent, ElectrodomesticoNoDisponibleComponent, HttpClientModule],
  providers: [ElectrodomesticoService],
  templateUrl: './search-code.component.html',
  styleUrl: './search-code.component.scss'
})
export class SearchCodeComponent {
  status: string = '';
  electrodomestico: any;
  message: string = '';

  constructor(private electrodomesticoService: ElectrodomesticoService) {}

  buscarElectrodomestico(codigo: string): void {
    if (codigo.trim()) {
      this.electrodomesticoService.getElectrodomestico(codigo).subscribe(
        (response) => {
          this.status = response.status;
          if (response.status === 'disponible') {
            this.electrodomestico = response.data;
          } else {
            this.message = response.message ?? '';
            this.electrodomestico = response.data;
          }
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.status = '';
          this.message = 'Error fetching data';
          this.electrodomestico = null;
        }
      );
    }
  }
}
