import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor( public router: Router, private menu: MenuController) { }
  goToPage( page ){
   this.router.navigate([ page ]);
  }
  openMenu(){
    this.menu.open();
  }

}
