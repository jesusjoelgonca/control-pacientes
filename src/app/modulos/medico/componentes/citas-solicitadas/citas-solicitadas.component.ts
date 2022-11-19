import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CitasService } from 'src/app/services/citas.service';
import { ISolicitudCita } from '../../modelos/consultas/solicitudCitas.interface';
import { IPaciente } from '../../modelos/paciente.interface';
import { ListadoPacienteComponent } from '../listado-paciente/listado-paciente.component';

@Component({
  selector: 'app-citas-solicitadas',
  templateUrl: './citas-solicitadas.component.html',
  styleUrls: ['./citas-solicitadas.component.css'],
})
export class CitasSolicitadasComponent implements OnInit {
  paciente_id: any;
  primer_nombre: any;
  segundo_apellido: any;
  id_solcitud: any;
  ipaciente!: IPaciente[];
  isolicitud!: ISolicitudCita[];
  union!: any[];
  unirMap: any = {};
  constructor(private citasService: CitasService, private auth: AuthService) {}

  ngOnInit(): void {
    this.citasService.getAllSolicitudCitas().subscribe((res) => {
      this.paciente_id = res;
      this.unirMap['solicitud'] = res
      for (let i = 0; i < res.length; i++) {
        
        this.unirMap['paciente_id'] = res[i];
        console.log(this.unirMap);
      }
    });

    this.auth.getAllPacientes().subscribe((dato) => {
      dato.forEach((paciente) => {
        this.unirMap['primer_nombre'] = paciente.primer_nombre;
      });
    });
  }
}
