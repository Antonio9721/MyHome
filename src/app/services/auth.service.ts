import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../model/usuarios.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/';
  private apikey = 'AIzaSyAPx9z5CkbOCJTiDG6CZeyZ6U02to4ZQEQ';

  userToken: string;

  constructor(private http: HttpClient) { this.leerToken(); }

  login(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}accounts:signInWithPassword?key=${this.apikey}`,
      authData).pipe(
        map( resp => {
          this.guardarToken( resp['idToken']);
          return resp;
        })
      );
  }

  logout(){
    localStorage.removeItem('token');
  }

  nuevoUsuario(usuario: UsuarioModel){
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${this.url}accounts:signUp?key=${this.apikey}`,
      authData).pipe(
        map( resp => {
          this.guardarToken( resp['idToken']);
          return resp;
        })
      );
  }

  private guardarToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken(){
    if (localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAuthenticado(): boolean {
    console.log('hola');
    return this.userToken.length > 2;
  }
}
