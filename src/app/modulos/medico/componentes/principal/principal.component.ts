import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  id: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.usuarioMedico().subscribe(
      (res: any) => {
        this.authService.setId(res.medico_id);
        console.log('medico_id obtenido por: ', this.authService.getId());
      },
      (error) => {
        console.log('Error al obtener medico', error);
      }
    );
  }
}
