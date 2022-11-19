import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasAsignadasComponent } from './componentes/citas-asignadas/citas-asignadas.component';
import { CitasSolicitadasComponent } from './componentes/citas-solicitadas/citas-solicitadas.component';
import { EditarPacienteComponent } from './componentes/Componentes-Editar/editar-paciente/editar-paciente.component';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { FormulaMedicaComponent } from './componentes/formula-medica/formula-medica.component';
import { ListadoPacienteComponent } from './componentes/listado-paciente/listado-paciente.component';
import { MedicoDashboardComponent } from './componentes/medico-dashboard/medico-dashboard.component';
import { NuevaConsultaComponent } from './componentes/nueva-consulta/nueva-consulta.component';
import { NuevoPacienteComponent } from './componentes/nuevo-paciente/nuevo-paciente.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: MedicoDashboardComponent,
    children: [
      { path: 'principal', component: PrincipalComponent },
      { path: 'citas-solicitadas', component: CitasSolicitadasComponent },
      { path: 'citas-asignadas', component: CitasAsignadasComponent },
      { path: 'consultas', component: ConsultasComponent },
      { path: 'nuevo-paciente', component: NuevoPacienteComponent },
      { path: 'listado-paciente', component: ListadoPacienteComponent },
      { path: 'nueva-consulta/paciente/:id', component: NuevaConsultaComponent },
      { path: 'formula-medica', component: FormulaMedicaComponent },
      { path: 'editar-paciente/:id', component: EditarPacienteComponent },
      { path: '', redirectTo: '/medico/principal', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoRoutingModule {}
