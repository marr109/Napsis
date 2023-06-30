import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokenKey = 'authToken';

  constructor(private cookieService: CookieService) {}

  setToken(token: string): void {
    this.cookieService.set(this.authTokenKey, token);
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwt_decode.default(token);
      if (decodedToken.rol === "admin") {
        console.log("entre como admin");
        return true;
      }
    }
    return false;
  } 
  
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
  

  getToken(): string | undefined {
    return this.cookieService.get(this.authTokenKey);
  }

  removeToken(): void {
    this.cookieService.delete(this.authTokenKey);
  }
  
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.removeToken();
  }
}