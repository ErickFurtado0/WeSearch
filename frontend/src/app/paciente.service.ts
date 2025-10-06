
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class PacienteService {
  private url = 'http://localhost:5000/api/paciente';
  constructor(private http: HttpClient) {}
  get() { return this.http.get<any[]>(this.url); }
  post(paciente: any) { return this.http.post(this.url, paciente); }
}
