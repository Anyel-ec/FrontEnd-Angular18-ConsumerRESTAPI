import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface ElectrodomesticoResponse {
  status: string;
  data?: any;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ElectrodomesticoService {
  private apiUrl = 'http://127.0.0.1:3000/electrodomestico';

  constructor(private http: HttpClient) {}

  getElectrodomestico(id: String): Observable<ElectrodomesticoResponse> {
    return this.http.get<ElectrodomesticoResponse>(`${this.apiUrl}/${id}`)
  }

  updateElectrodomestico(id: number, cantidad: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, { cantidad })
  }
}
