import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authorization/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  sesionIniciada(): boolean {
    return this.authService.isAuthenticated();
  }

  eresAdmin():boolean{
    return this.authService.isAdmin();
  }

  cerrarSesion(): void {
    this.authService.logout();
    alert("Sesion caducada");
    this.router.navigate(['/']);
  }
}

