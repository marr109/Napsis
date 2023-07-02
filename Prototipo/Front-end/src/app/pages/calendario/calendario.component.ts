import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {
  calendarOptions!: CalendarOptions;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin]
    };

    this.loadCalendarEvents();
  }

  loadCalendarEvents() {
    const alumnoId = 1; // Reemplaza el valor estático con el ID del alumno actualmente conectado
    this.http
      .get<any[]>('/api/users/' + alumnoId + '/calendario')
      .subscribe((data) => {
        const events = data.flatMap((asignatura) =>
          asignatura.Evaluacions.map((evaluacion: any) => ({
          title: evaluacion.nombrePrueba,
          date: evaluacion.fecha
        }))
    );

    this.calendarOptions.events = events;
  });

  }
}
