import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../authorization/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      console.log('Autentificado');

      // Verificar si se requiere rol de administrador
      if (next.data['roles'] && next.data['roles'].includes('admin')) {
        if (this.authService.isAdmin()) {
          console.log('Eres admin');
          return true;
        } else {
          console.log('No eres admin');
          this.router.navigate(['/inicio']);
          return false;
        }
      }

      return true;
    } else {
      console.log('No autentificado');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
