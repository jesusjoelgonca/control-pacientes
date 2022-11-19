import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IPaciente } from '../../modelos/paciente.interface';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.component.html',
  styleUrls: ['./nuevo-paciente.component.css'],
})
export class NuevoPacienteComponent implements OnInit {
  paciente!: IPaciente;
  medico_id: any;
  crearForm = new FormGroup({
    identificacion: new FormControl(''),
    primer_nombre: new FormControl(''),
    segundo_nombre: new FormControl(''),
    primer_apellido: new FormControl(''),
    segundo_apellido: new FormControl(''),
    genero: new FormControl(''),
    fecha_nacimiento: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    ocupacion: new FormControl(''),
    medico_id: new FormControl(this.auth.getId()),
  });
  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.auth.usuarioMedico().subscribe(
      (res: any) => {
        this.auth.setId(res.medico_id);
        this.medico_id = this.auth.getId(); 
        console.log(this.medico_id);
      },
      (error) => {
        console.log('Error al obtener medico', error);
      }
    );
  }

  crearPaciente(): void {
    console.log(this.crearForm.value);
    this.auth.crearPaciente(this.crearForm.value).subscribe((res) => {
      this.route.navigate(['/medico/listado-paciente']);
    });
  }
}
