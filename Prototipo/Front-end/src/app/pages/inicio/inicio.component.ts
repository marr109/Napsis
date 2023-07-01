
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string{
    let styleClass= '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass ='body-trimmed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass= 'body-md-screen'
    }
    return '';
  }




  cookieAccepted = localStorage.getItem('cookieAccepted');
  showCookieBanner = !this.cookieAccepted;
  aceptarCookies(): void {
    localStorage.setItem('cookieAccepted', 'true');
    this.showCookieBanner = false;
  }
}
