import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConsultaService } from 'src/app/services/consulta.service';
import { IPaciente } from '../../../modelos/paciente.interface';
import { IMotivo } from '../../../modelos/consultas/motivo.interface';
import { MotivoModel } from '../../../modelos/consultas/motivo.models';
import { PacienteModel } from '../../../modelos/paciente.model';
import { NuevaConsultaComponent } from '../../nueva-consulta/nueva-consulta.component';

@Component({
  selector: 'app-consulta-paciente',
  templateUrl: './consulta-paciente.component.html',
  styleUrls: ['./consulta-paciente.component.css'],
})
export class ConsultaPacienteComponent implements OnInit {
  datosPaciente!: IPaciente[];
  datosMotivos: IMotivo[] = [];
  pacienteModel = new PacienteModel();
  motivoModel = new MotivoModel();
  id: any = this.consulta.getIdPaciente();
  formMotivo!: FormGroup;
  constructor(
    private activerRouter: ActivatedRoute,
    private consultaService: ConsultaService,
    private authService: AuthService,
    private consulta: NuevaConsultaComponent,
    private fb: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    let id = this.activerRouter.snapshot.paramMap.get('id');
    this.id = Number(id);
    this.authService.getPaciente(id).subscribe((data: any) => {
      this.pacienteModel.id = data;
      this.id = data.id;
    });
    
    this.crearFomr();
  }

  crearFomr() {
    this.formMotivo = this.fb.group({
      motivo_consulta: [''],
      enfermedad_actual: [''],
      antecedentes_enfermedad_ac: [''],
      antecedentes_familiares: [''],
      fecha_consulta: [''],
      paciente_id:[this.id]

    });
  }

  crearMotivoConsulta(): void {
    console.log(this.id);
    console.log(this.formMotivo.value);

    this.consultaService
      .crearMotivo(this.formMotivo.value)
      .subscribe((res) => {
        window.location.reload();
        alert('Registrado con exito!');
      });
  }
}
