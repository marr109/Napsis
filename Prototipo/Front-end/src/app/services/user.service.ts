import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users'
  }

   registro(user: User): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
  }

   login(user: User): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`, user)
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/control`); 
  }

  updateUser(usuario: string, rol: string): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}/control`, { usuario, rol }); 
  }

  updateUser_1(usuario: string, rol: string): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}/control`, { rol }); 
  }

  deleteUser(usuario: string | undefined): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/control${usuario}`);
  }


  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`${this.myAppUrl}/users/${email}`);
  }


}