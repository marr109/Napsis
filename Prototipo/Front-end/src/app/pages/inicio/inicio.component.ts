import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  cookieAccepted = localStorage.getItem('cookieAccepted');
  showCookieBanner = !this.cookieAccepted;
  aceptarCookies(): void {
    localStorage.setItem('cookieAccepted', 'true');
    this.showCookieBanner = false;
  }
}
