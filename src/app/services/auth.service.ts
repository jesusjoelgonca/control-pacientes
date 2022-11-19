import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPaciente } from '../modulos/medico/modelos/paciente.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  id: number;
  constructor(private http: HttpClient, private router: Router) {
    this.id = this.getId();
  }

  setId(id: number) {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() != null;
  }

  login(data: any) {
    return this.http.post('http://127.0.0.1:8080/usuarios_medicos/login', data);
  }

  logout(data: any) {
    return this.http.post('http://127.0.0.1:8080/usuarios_medicos/login', data);
  }

  crearPaciente(data: any) {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.post('http://127.0.0.1:8080/pacientes', data, {
      headers: head_obj,
    });
  }

  usuarioMedico() {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });

    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());

    return this.http.get('http://127.0.0.1:8080/usuarios_medicos/' + '5', {
      headers: head_obj,
    });
  }

  getAllPacientes(): Observable<IPaciente[]> {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.get<IPaciente[]>('http://127.0.0.1:8080/pacientes', {
      headers: head_obj,
    });
  }

  getPaciente(id: any): Observable<IPaciente> {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.get<IPaciente>('http://127.0.0.1:8080/pacientes/' + id, {
      headers: head_obj,
    });
  }

  editarPaciente(id: any, data: any) {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.put<IPaciente>(
      'http://127.0.0.1:8080/pacientes/' + id,
      data,
      {
        headers: head_obj,
      }
    );
  }
  eliminarPaciente(id: any) {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.delete('http://127.0.0.1:8080/pacientes/' + id, {
      headers: head_obj,
    });
  }
}
