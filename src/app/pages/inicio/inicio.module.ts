import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import {InicioPageRoutingModule} from './inicio-routing.module';
import {InicioPage} from './inicio.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InicioPageRoutingModule,
    ComponentsModule,
    RouterModule.forChild([{path: '', component: InicioPage}])
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
