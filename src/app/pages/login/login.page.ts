import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
// @ts-ignore
import { UsuarioModel } from '../../model/usuarios.model';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
// @ts-ignore
import Swal from 'sweetalert2';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slidePrincipal') slides: IonSlides;

  usuario: UsuarioModel;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatartSlide = {
    slidesPerView: 3.5
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { this.usuario = new UsuarioModel(); }

  ionViewDidEnter(){
    this.slides.lockSwipes( true );
  }

  login(form: NgForm){
    if (form.invalid) { return; }
    Swal.fire({
      icon: 'info',
      text: 'Espere un momento...'
    });
    Swal.showLoading();
    this.auth.login(this.usuario)
        .subscribe( resp => {
          Swal.close();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Bienvenido',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl('/home');
        }, (err) => {
          Swal.fire({
            icon: 'error',
            text: 'Email y/o Contraseña incorrectas'
          });
        });
  }

  registro(form: NgForm){
    if (form.invalid) { return; }
    Swal.fire({
      icon: 'info',
      text: 'Creando usuario'
    });
    Swal.showLoading();
    this.auth.nuevoUsuario(this.usuario)
        .subscribe( resp => {
          Swal.close();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se ha creado el usuario',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl('/tabs/tab1');
        }, (err) => {
          Swal.fire({
            icon: 'error',
            text: err.error.error.message
          });
        });
  }

  seleccionarAvatar(avatar){
    this.avatars.forEach( av => av.seleccionado = false);
    avatar.seleccionado = true;
  }

  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

}
