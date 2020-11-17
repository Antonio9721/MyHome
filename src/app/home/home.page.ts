import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuController} from '@ionic/angular';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(private auth: AuthService, private router: Router,  private menu: MenuController) { }
  goToPage( page ){
   this.router.navigate([ page ]);
  }
  openMenu(){
    this.menu.open();
  }

    logout() {
      this.auth.logout();
      this.router.navigateByUrl('/login');
    }
}
