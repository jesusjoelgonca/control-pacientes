import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { IniciarSesionComponent } from './paginas/iniciar-sesion/iniciar-sesion.component';
import { NotFoundComponent } from './paginas/not-found/not-found.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full' },
  {
    path: 'medico',
    canActivate: [AuthGuard], 
    loadChildren: () =>
      import('./modulos/medico/medico.module').then((m) => m.MedicoModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
