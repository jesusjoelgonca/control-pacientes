import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IPaciente } from '../../../modelos/paciente.interface';


@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css'],
})
export class EditarPacienteComponent implements OnInit {
  constructor(
    private activerRouter: ActivatedRoute,
    private authService: AuthService,
    private route: Router
  ) {} 
  genero: any = [
    { valorGenero: 'Masculino', nombreGenero: 'Masculino' },
    { valorGenero: 'Femenino', nombreGenero: 'Femenino' },
  ];
  datosPaciente!: IPaciente;
  private medico_id: any;
  editarForm = new FormGroup({
    id: new FormControl(''),
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
    medico_id: new FormControl(this.authService.getId()),
  });
  ngOnInit(): void {
    this.authService.usuarioMedico().subscribe(
      (res: any) => {
        this.authService.setId(res.medico_id);
        this.medico_id = this.authService.getId();
        console.log(this.medico_id);
      },
      (error) => {
        console.log('Error al obtener medico', error);
      }
    );
    let id = this.activerRouter.snapshot.paramMap.get('id');
    console.log(id);
    this.authService.getPaciente(id).subscribe((data) => {
      this.datosPaciente = data;
      console.log(this.datosPaciente.correo);
      setTimeout(() => {
        this.editarForm.setValue({
          id: this.datosPaciente.id,
          identificacion: this.datosPaciente.identificacion,
          primer_nombre: this.datosPaciente.primer_nombre,
          segundo_nombre: this.datosPaciente.segundo_nombre,
          primer_apellido: this.datosPaciente.primer_apellido,
          segundo_apellido: this.datosPaciente.segundo_apellido,
          genero: this.datosPaciente.genero,
          fecha_nacimiento: this.datosPaciente.fecha_nacimiento,
          telefono: this.datosPaciente.telefono,
          correo: this.datosPaciente.correo,
          ocupacion: this.datosPaciente.ocupacion,
          medico_id: this.datosPaciente.medico_id
        });
      });
    });
  }

  editarPacienteForm():void {
    let id = this.activerRouter.snapshot.paramMap.get('id');
    this.authService.editarPaciente(id,this.editarForm.value).subscribe(res => {
      this.route.navigate(['/medico/listado-paciente'])
    });
  }
}
