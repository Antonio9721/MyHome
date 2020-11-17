import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import {RouterModule} from '@angular/router';
import {ExploreContainerComponentModule} from '../pages/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
