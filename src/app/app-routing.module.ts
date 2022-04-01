import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountComponent } from './account/account.component';
import { MessagingComponent } from './messaging/messaging.component';
import { CollectionComponent } from './collection/collection.component';
import { BillComponent } from './bill/bill.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
  },
  { 
    path: 'account',
    pathMatch: 'full',
    component: AccountComponent 
  },
  { 
    path: 'messaging',
    pathMatch: 'full',
    component: MessagingComponent 
  },
  { 
    path: 'collection',
    pathMatch: 'full',
    component: CollectionComponent 
  },
  { 
    path: 'bill',
    pathMatch: 'full',
    component: BillComponent 
  },
  { 
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, AccountComponent, MessagingComponent, CollectionComponent, BillComponent, NotfoundComponent];
