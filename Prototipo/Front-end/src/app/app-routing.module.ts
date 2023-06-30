import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ControlComponent } from './pages/control/control.component';
import { AuthGuard } from './services/authorizationGuard/auth.guard';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  // {path:'inicio', component:InicioComponent, canActivate: [AuthGuard], data: { roles: ['alumno'] },
  {path:'registro', component:RegistroComponent},
  {path:'control', component:ControlComponent, canActivate: [AuthGuard], data: { roles: ['admin'] }},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


