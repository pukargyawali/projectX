import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  HomeTabComponent} from './home-tab.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomeTabRoutingModule } from './home-tab.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomeTabRoutingModule
  ],
  declarations: [HomeTabComponent]
})
export class HomeTabModule {}
