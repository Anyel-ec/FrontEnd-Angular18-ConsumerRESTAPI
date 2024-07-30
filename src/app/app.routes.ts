import { Routes } from '@angular/router';
import { SearchCodeComponent } from './components/search-code/search-code.component';
import { ElectrodomesticoNoDisponibleComponent } from './electrodomestico-no-disponible/electrodomestico-no-disponible.component';
import { ElectrodomesticoDisponibleComponent } from './electrodomestico-disponible/electrodomestico-disponible.component';
import { ElectrodomesticoPocoDisponibleComponent } from './electrodomestico-poco-disponible/electrodomestico-poco-disponible.component';

export const routes: Routes = [
  {
    path: 'inicio' ,
    component: SearchCodeComponent
  }

];
