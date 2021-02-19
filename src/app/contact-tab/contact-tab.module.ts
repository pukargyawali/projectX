import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ContactTabComponent} from './contact-tab.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ContactRoutingModule } from './contact-tab.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ContactRoutingModule
  ],
  declarations: [ContactTabComponent]
})
export class ContactTabModule {}
