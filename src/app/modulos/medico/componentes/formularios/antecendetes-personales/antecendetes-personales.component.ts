import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConsultaService } from 'src/app/services/consulta.service';
import { IPaciente } from '../../../modelos/paciente.interface';
import { PacienteModel } from '../../../modelos/paciente.model';
import { NuevaConsultaComponent } from '../../nueva-consulta/nueva-consulta.component';
import { IMotivo } from '../../../modelos/consultas/motivo.interface';

@Component({
  selector: 'app-antecendetes-personales',
  templateUrl: './antecendetes-personales.component.html',
  styleUrls: ['./antecendetes-personales.component.css'],
})
export class AntecendetesPersonalesComponent implements OnInit {
  datosPaciente!: IPaciente[];
  pacienteModel = new PacienteModel();
  datosMotivos: IMotivo[] = [];
  id: number = this.consulta.getIdPaciente();
  consulta_id: number = this.consulta.getConsultaId();
  formAntecedentes!: FormGroup;
  botonDesactivado: boolean = false;
  constructor(
    private activerRouter: ActivatedRoute,
    private consultaService: ConsultaService,
    private authService: AuthService,
    private consulta: NuevaConsultaComponent,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.activerRouter.snapshot.paramMap.get('id');
    this.id = Number(id);
    this.authService.getPaciente(id).subscribe((data: any) => {
      this.pacienteModel.id = data;
      this.id = data.id;
    });

    this.consultaService.getAllAntecedentesPersonales().subscribe((res) => {
      console.log(res);
    });
    this.crearForm();
  }

  crearForm() {
    this.formAntecedentes = this.fb.group({
      enfermedad_de_infancia: [''],
      consulta_id: [this.consulta.getConsultaId()],
    });
  }

  CrearAntecedente() {
    console.log(this.consulta.getConsultaId());
    console.log(this.formAntecedentes.value);
    // this.consultaService
    //   .crearAntecedentesPersonales(this.formAntecedentes.value)
    //   .subscribe((res) => {
    //     window.location.reload();
    //     alert('Registrado con exito!');
    //   });
  }
}
