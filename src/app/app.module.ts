import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule }   from '@angular/router';
 

import { ListFormComponent } from './list-form.component';
import { EntireListComponent } from './entirelist.component';


import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from  './../environments/firebase.config';

const routes: Routes = [  
{path: 'listnew',component: ListFormComponent}, 
{path: 'entirelist',component: EntireListComponent}, 
 
{ path: '', component: EntireListComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    ListFormComponent,
    EntireListComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

 