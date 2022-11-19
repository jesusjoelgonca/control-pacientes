import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IniciarSesionModel } from './iniciar-sesion.model';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent implements OnInit {
  iniciarSesion = new IniciarSesionModel();
  obtenerToken: any;
  success: boolean = true;
  constructor(private authService: AuthService, private route: Router) {}
  msg: any = '';
  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if (localStorage.getItem('token') != null) {
      this.route.navigate(['medico']);
    } else {
      this.route.navigate(['iniciar-sesion']);
    }
  }

  loginProcess() {
    this.authService.login(this.iniciarSesion).subscribe((res: any) => {
      if (res.success == true) {
        console.log(res);
        this.obtenerToken = res.access_token;
        this.authService.setToken(this.obtenerToken);
        this.route.navigate(['medico']);
      } else {
        this.success = false;
        this.msg = 'Identificacion o Contraseña incorrectos!';
      }

     
    });
  }
}
