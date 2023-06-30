import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { RecaptchaService } from '../../services/recaptcha.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  formulario:FormGroup;
  usuario: AbstractControl;
  email: AbstractControl;
  password:AbstractControl;

  constructor(private form:FormBuilder, private _userService: UserService,
    private router: Router, private recaptchaService: RecaptchaService) {
    this.formulario=this.form.group({
      usuario:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
    this.usuario = this.formulario.controls['usuario'];
    this.email= this.formulario.controls['email'];  
    this.password=this.formulario.controls['password'];
   }

   ngOnInit(): void {
    this.recaptchaService.loadScript()
      .then(() => console.log('Script cargado.'))
      .catch(() => console.error('Error al cargar el script.'));
  }
  

  registro(){
    const user: User = {
      usuario: this.usuario.value,
      email: this.email.value,
      password: this.password.value
    }

    this._userService.registro(user).subscribe({
      next: (user) =>{
        this.router.navigate(['./login']);
      }
    })
  }

}