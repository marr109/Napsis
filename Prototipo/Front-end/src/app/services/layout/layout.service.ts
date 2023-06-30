import { Injectable } from '@angular/core';
import { AuthService } from '../authorization/auth.service';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  constructor(private authService: AuthService) { }

  get showHeaderFooter(): boolean {
    return this.authService.isLoggedIn();
  }
}
