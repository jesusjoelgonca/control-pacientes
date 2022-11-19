import { NgModule } from '@angular/core';
import { MedicoRoutingModule } from './medico-routing.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CitasAsignadasComponent } from './componentes/citas-asignadas/citas-asignadas.component';
import { CitasSolicitadasComponent } from './componentes/citas-solicitadas/citas-solicitadas.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { ConsultaPacienteComponent } from './componentes/formularios/consulta-paciente/consulta-paciente.component';
import { NuevaConsultaComponent } from './componentes/nueva-consulta/nueva-consulta.component';
import { NuevoPacienteComponent } from './componentes/nuevo-paciente/nuevo-paciente.component';
import { FormulaMedicaComponent } from './componentes/formula-medica/formula-medica.component';
import { ListadoPacienteComponent } from './componentes/listado-paciente/listado-paciente.component';
import { AbdominalComponent } from './componentes/formularios/abdominal/abdominal.component';
import { AntecendetesPersonalesComponent } from './componentes/formularios/antecendetes-personales/antecendetes-personales.component';
import { CabezaComponent } from './componentes/formularios/cabeza/cabeza.component';
import { CardiovascularComponent } from './componentes/formularios/cardiovascular/cardiovascular.component';
import { CuelloComponent } from './componentes/formularios/cuello/cuello.component';
import { EnfermedadesComponent } from './componentes/formularios/enfermedades/enfermedades.component';
import { ExamenFisicoComponent } from './componentes/formularios/examen-fisico/examen-fisico.component';
import { GenecologicosComponent } from './componentes/formularios/genecologicos/genecologicos.component';
import { HabitosFisiologicosComponent } from './componentes/formularios/habitos-fisiologicos/habitos-fisiologicos.component';
import { HabitosToxicosComponent } from './componentes/formularios/habitos-toxicos/habitos-toxicos.component';
import { NeurologicoComponent } from './componentes/formularios/neurologico/neurologico.component';
import { PFTCSubcutaneoComponent } from './componentes/formularios/p-f-t-c-subcutaneo/p-f-t-c-subcutaneo.component';
import { RespiratorioComponent } from './componentes/formularios/respiratorio/respiratorio.component';
import { SensibilidadProfundaComponent } from './componentes/formularios/sensibilidad-profunda/sensibilidad-profunda.component';
import { SensibilidadSuperficialComponent } from './componentes/formularios/sensibilidad-superficial/sensibilidad-superficial.component';
import { MedicoDashboardComponent } from './componentes/medico-dashboard/medico-dashboard.component';
import { EditarPacienteComponent } from './componentes/Componentes-Editar/editar-paciente/editar-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PrincipalComponent,
    CitasAsignadasComponent,
    CitasSolicitadasComponent,
    ConsultasComponent,
    ConsultaPacienteComponent,
    NuevaConsultaComponent,
    NuevoPacienteComponent,
    FormulaMedicaComponent,
    ListadoPacienteComponent,
    AbdominalComponent,
    AntecendetesPersonalesComponent,
    CabezaComponent,
    CardiovascularComponent,
    CuelloComponent,
    EnfermedadesComponent,
    ExamenFisicoComponent,
    GenecologicosComponent,
    HabitosFisiologicosComponent,
    HabitosToxicosComponent,
    NeurologicoComponent,
    PFTCSubcutaneoComponent,
    RespiratorioComponent,
    SensibilidadProfundaComponent,
    SensibilidadSuperficialComponent,
    MedicoDashboardComponent,
    EditarPacienteComponent,
    

  ],
  imports: [CommonModule, MedicoRoutingModule, ReactiveFormsModule],
})
export class MedicoModule {}
