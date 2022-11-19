import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConsultaService } from 'src/app/services/consulta.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { IPaciente } from '../../modelos/paciente.interface';

@Component({
  selector: 'app-listado-paciente',
  templateUrl: './listado-paciente.component.html',
  styleUrls: ['./listado-paciente.component.css'],
})
export class ListadoPacienteComponent implements OnInit {
  pacientes: IPaciente[] = [];
  nuevoDato: any;
  id: any;
  nombre: string = '';
  apellido: string = '';
  identificacion: string = '';
  correo: string = '';
  formUsuario!: FormGroup;

  
  constructor(
    private authService: AuthService,
    private activerRouter: ActivatedRoute,
    private usuariosService: UsuariosService,
    private consultaService: ConsultaService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.authService.getAllPacientes().subscribe((data) => {
      this.nuevoDato = data;
      let id = this.activerRouter.snapshot.paramMap.get('id');
      console.log('desde activerouter: ', id);
    });

  }

  setIdPaciente(id: number) {
    return (this.id = id);
  }
  getIdPaciente(): number {
    return this.id;
  }
  isShown: boolean = false;
  toggleShow(
    id: any,
    primer_nombre: any,
    segundo_apellido: any,
    identificacion: any,
    correo:any
  ) {
    this.isShown = !this.isShown;
    this.nombre = primer_nombre;
    this.apellido = segundo_apellido;
    this.identificacion = identificacion;
    this.correo = correo;
    this.setIdPaciente(id);
    console.log(
      'desde toggleshow:',
      this.getIdPaciente(),
      this.nombre,
      this.apellido,
      this.identificacion
    );
    this.crearFomr(this.identificacion,this.correo);
  }
  crearFomr(identificacion:any,correo:any) {
    this.formUsuario = this.fb.group({
      identificacion: [identificacion],
      password: [identificacion],
      correo: [correo],
      paciente_id: [this.getIdPaciente()],
    });
  }

  generarUsuario(): void {
    console.log(this.formUsuario.value);
    this.usuariosService.crearUsuarioPaciente(this.formUsuario.value).subscribe((res) => {
      alert('se ha generado el usuario');
    });
  }

  eliminar(): void {
    this.authService.eliminarPaciente(this.getIdPaciente()).subscribe((res) => {
      alert('se ha eliminado el paciente');
      window.location.reload();
      
    });
  }

  
}
