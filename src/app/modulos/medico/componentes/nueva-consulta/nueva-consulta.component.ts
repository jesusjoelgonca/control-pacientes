import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConsultaService } from 'src/app/services/consulta.service';
import { IMotivo } from '../../modelos/consultas/motivo.interface';
import { MotivoModel } from '../../modelos/consultas/motivo.models';
import { IPaciente } from '../../modelos/paciente.interface';

@Component({
  selector: 'app-nueva-consulta',
  templateUrl: './nueva-consulta.component.html',
  styleUrls: ['./nueva-consulta.component.css'],
})
export class NuevaConsultaComponent implements OnInit {
  datosPaciente!: IPaciente;
  datosMotivos: IMotivo[] = [];
  motivoModel = new MotivoModel();
  paciente_id: number;
  botonDesactivado: boolean = false;
  consulta_id: number;
  constructor(
    private activerRouter: ActivatedRoute,
    private authService: AuthService,
    private consultaService: ConsultaService
  ) {
    this.paciente_id = this.getIdPaciente();
    this.consulta_id = this.getConsultaId();
  }

  ngOnInit(): void {
    let id = this.activerRouter.snapshot.paramMap.get('id');

    this.authService.getPaciente(id).subscribe((data) => {
      this.datosPaciente = data;
      this.setIdPaciente(this.datosPaciente.id);
      console.log('desde nueva-consulta', this.datosPaciente);
      console.log('id desde nueva-consulta', this.getIdPaciente());
    });

    this.consultaService.getAllMotivos().subscribe((res) => {
      this.datosMotivos = res;
      for (let i = 0; i < this.datosMotivos.length; i++) {
        if (this.datosMotivos[i].paciente_id == this.paciente_id) {
          this.botonDesactivado = true;
          this.setConsultaId(this.datosMotivos[i].id);
          console.log(this.datosMotivos[i].id);
        }
      }
    });

    this.consultaService.getAllAntecedentesPersonales().subscribe((res) => {});
  }

  setIdPaciente(paciente_id: number) {
    this.paciente_id = paciente_id;
  }

  getIdPaciente(): number {
    return this.paciente_id;
  }

  setConsultaId(consulta_id: number) {
    this.consulta_id = consulta_id;
  }
  getConsultaId(): number {
    return this.consulta_id;
  }
}
