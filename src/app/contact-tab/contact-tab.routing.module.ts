import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactTabComponent } from './contact-tab.component';

const routes: Routes = [
  {
    path: '',
    component: ContactTabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
