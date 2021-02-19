import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  FavoriteTabComponent} from './favorite-tab.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FavoriteTabRoutingModule } from './favorite-tab.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    FavoriteTabRoutingModule
  ],
  declarations: [FavoriteTabComponent]
})
export class FavoriteTabModule {}
