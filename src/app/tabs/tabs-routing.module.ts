import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home-tab',
        loadChildren: () => import('../home-tab/home-tab.module').then(m => m.HomeTabModule)
      },
      {
        path: 'my-order',
        loadChildren: () => import('../my-order/my-order.module').then(m => m.MyOrderModule)
      },
      {
        path: 'favorite-tab',
        loadChildren: () => import('../favorite-tab/favorite-tab.module').then(m => m.FavoriteTabModule)
      },
      {
        path: 'contact-tab',
        loadChildren: () => import('../contact-tab/contact-tab.module').then(m => m.ContactTabModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
