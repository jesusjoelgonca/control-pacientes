import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAntecedentes } from '../modulos/medico/modelos/consultas/antecedentes.interface';
import { IMotivo } from '../modulos/medico/modelos/consultas/motivo.interface';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  paciente_id: number;
  motivoI!: IMotivo;
  antecedentesI!: IAntecedentes;
  constructor(private http: HttpClient, private router: Router) {
    this.paciente_id = this.getIdPaciente();
  }

  setIdPaciente(paciente_id: number) {
    this.paciente_id = paciente_id;
  }

  getIdPaciente(): number {
    return this.paciente_id;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  crearMotivo(data: any) {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.post('http://127.0.0.1:8080/motivo-consultas', data, {
      headers: head_obj,
    });
  }

  getMotivo(id: any): Observable<IMotivo> {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.get<IMotivo>(
      'http://127.0.0.1:8080/motivo-consultas/' + id,
      {
        headers: head_obj,
      }
    );
  }

  getAllMotivos(): Observable<IMotivo[]> {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.get<IMotivo[]>('http://127.0.0.1:8080/motivo-consultas', {
      headers: head_obj,
    });
  }

  crearAntecedentesPersonales(data: any) {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.post(
      'http://127.0.0.1:8080/antecedentes_personales',
      data,
      {
        headers: head_obj,
      }
    );
  }

  getAllAntecedentesPersonales() {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.get<IAntecedentes[]>(
      'http://127.0.0.1:8080/antecedentes_personales',
      {
        headers: head_obj,
      }
    );
  }

  crearHabitosFisiologicos(data: any) {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.post('http://127.0.0.1:8080/habitos_fisiologicos', data, {
      headers: head_obj,
    });
  }
  crearHabitosToxicos(data: any) {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.post('http://127.0.0.1:8080/habitos_toxicos', data, {
      headers: head_obj,
    });
  }
}
