import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  baseURL = 'https://localhost:5001/api/eventos';
constructor(private http: HttpClient) { }

  getEvento() {
    return this.http.get(this.baseURL);
  }

}
