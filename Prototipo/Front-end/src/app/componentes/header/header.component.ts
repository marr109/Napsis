import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/authorization/auth.service';
import { Router } from '@angular/router';
import { navbarData } from './nav-data';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}





  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  navData = navbarData;
  screenWidth = 0;


  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  sesionIniciada(): boolean {
    return this.authService.isAuthenticated();
  }

  eresAdmin():boolean{
    return this.authService.isAdmin();
  }

  cerrarSesion(): void {
    this.authService.logout();
    alert("Sesion caducada");
    this.router.navigate(['/login']);
  }
}

