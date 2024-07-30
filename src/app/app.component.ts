import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchCodeComponent } from './components/search-code/search-code.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examen_electrodomestico';
}
