import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTabComponent } from './home-tab.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTabRoutingModule {}
