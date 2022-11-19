import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ISolicitudCita } from '../modulos/medico/modelos/consultas/solicitudCitas.interface';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnit() {}
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  getAllSolicitudCitas(): Observable<ISolicitudCita[]> {
    let head_obj = new HttpHeaders({ 'Content-Type': 'application/json' });
    head_obj = head_obj.append('Authorization', 'Bearer ' + this.getToken());
    return this.http.get<ISolicitudCita[]>('http://127.0.0.1:8080/s_c_p', {
      headers: head_obj,
    });
  }
}
