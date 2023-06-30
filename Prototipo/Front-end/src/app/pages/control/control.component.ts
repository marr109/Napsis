import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { EditRolComponent } from '../edit-rol/edit-rol.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit{

  public listUsers: User[] = [];

  constructor(private _userService: UserService, public dialog: MatDialog){} 

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this._userService.getUsers().subscribe(data =>{
      this.listUsers = data;
      console.log(data);
    })
  }

  updateUser(usuario: string | undefined, rol: string | undefined): void {
    if (typeof usuario === 'string' && typeof rol === 'string') {
      console.log(`Updating user ${usuario} with role ${rol}`);
      this._userService.updateUser_1(usuario, rol).subscribe(response => {
        // Actualización exitosa
        console.log('Response from server:', response);
        console.log('Rol del usuario actualizado');
        // Actualizar la lista de usuarios después de la actualización
        this.getUsers();
      }, error => {
        // Manejo de errores en caso de que la actualización falle
        console.error('Error al actualizar el rol del usuario', error);
      });
    }
  }

  deleteUser(usuario: string | undefined) {
    if (typeof usuario === 'string') {
      this._userService.deleteUser(usuario).subscribe(response => {
        // Eliminación exitosa
        console.log('Usuario eliminado');
        // Actualiza la lista de usuarios después de la eliminación
        this.getUsers();
      }, error => {
        // Manejo de errores en caso de que la eliminación falle
        console.error('Error al eliminar el usuario', error);
      });
    }
  }

  getUserByEmail(email: string){
  }

  openDialog(usuario: string | undefined, rol: string | undefined): void {
    const dialogRef = this.dialog.open(EditRolComponent, {
      width: '250px',
      data: { rol: rol }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.updateUser(usuario, result);
    });
  }
}
