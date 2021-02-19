import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteTabComponent } from './favorite-tab.component';

const routes: Routes = [
  {
    path: '',
    component: FavoriteTabComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoriteTabRoutingModule {}
