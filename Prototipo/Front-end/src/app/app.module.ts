import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './pages/registro/registro.component';
import { ControlComponent } from './pages/control/control.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditRolComponent } from './pages/edit-rol/edit-rol.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necesario para los componentes de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'; // Para mat-toolbar
import { MatIconModule } from '@angular/material/icon'; // Para mat-icon
import { MatButtonModule } from '@angular/material/button'; // Para button con mat-icon-button
import { MatSidenavModule } from '@angular/material/sidenav'; // Para mat-drawer

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    ControlComponent,
    EditRolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule, // Necesario para los componentes de Angular Material
    MatToolbarModule, // Para mat-toolbar
    MatIconModule, // Para mat-icon
    MatButtonModule, // Para button con mat-icon-button
    MatSidenavModule, // Para mat-drawer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
