import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.scss']
})
export class CalificacionesComponent implements OnInit {
  calificaciones: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCalificaciones();
  }

  getCalificaciones() {
    const alumnoId = 1; // Reemplaza el valor estático con el ID del alumno actualmente conectado
    const asignaturaId = 1; // Reemplaza el valor estático con el ID de la asignatura

    this.userService.getCalificacionesAlumnoAsignatura(alumnoId, asignaturaId).subscribe(
      (data) => {
        this.calificaciones = data;
      },
      (error) => {
        console.error('Error retrieving grades:', error);
      }
    );
  }
}
