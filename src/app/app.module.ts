import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageService } from './homepage/homepage.service';
import { MessagingComponent } from './messaging/messaging.component';
import { CollectionComponent } from './collection/collection.component';
import { AccountComponent } from './account/account.component';
import { BillComponent } from './bill/bill.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: HomepageComponent 
      },
      { 
        path: 'account',
        component: AccountComponent 
      },
      { 
        path: 'messaging', 
        component: MessagingComponent 
      },
      { 
        path: 'collection', 
        component: CollectionComponent 
      },
      { 
        path: 'bill', 
        component: BillComponent 
      },
      { 
        path: '**', 
        component: NotfoundComponent
      },
    ])
  ],
  providers: [
    HomepageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
