import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss']
})
export class AsistenciaComponent implements OnInit {
  asistencias: any[] = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    const alumnoId = 1; // Obtén el ID del alumno de alguna manera (por ejemplo, desde la URL)
    const asignaturaId = 1; // Obtén el ID de la asignatura de alguna manera (por ejemplo, desde la URL)

    this.getAsistenciaAlumno(alumnoId, asignaturaId);
  }

  getAsistenciaAlumno(alumnoId: number, asignaturaId: number): void {
    this.service.getAsistenciaAlumno(alumnoId, asignaturaId).subscribe(
      (response: any) => {
        this.asistencias = response;
      },
      (error: any) => {
        console.error('Error retrieving attendance:', error);
        // Manejo del error (mostrar mensaje de error, redirigir, etc.)
      }
    );
  }
}
