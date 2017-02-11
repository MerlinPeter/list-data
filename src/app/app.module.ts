import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { ListFormComponent } from './list-form.component';



import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from  './../environments/firebase.config';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'listnew',
        component: ListFormComponent
      }
    ]),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    ListFormComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

 