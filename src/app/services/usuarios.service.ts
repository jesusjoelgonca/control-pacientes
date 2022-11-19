import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  crearUsuarioPaciente(data: any) {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.post('http://127.0.0.1:8080/usuarios_pacientes', data, {
      headers: head_obj,
    });
  }
}
