import { Component } from '@angular/core';
import { myList } from './list';

import { FirebaseService } from './services/firebase.service';


import { AngularFire, FirebaseListObservable } from 'angularfire2' ;
@Component({
  selector: 'app-root',
  providers: [FirebaseService] ,
  templateUrl: './app.component.html'
 // template: '<list-form></list-form>'
 
})
export class AppComponent  {
  listitems: myList[];
   
   title ="Grozery App"
  // private experiments: myList[] = [
   // {key: "sasdf", company: 'Mr. Nice' ,category: 'Mr. Nice' , phone :'2323' }];
    
 //  listentry: myList = ({key: "3054", company: 'asdfasd. working' ,
  //   category: 'store boy' , phone :'2323' });

 


  constructor(private _firebaseService: FirebaseService) {

  }
  ngOnInit() {
   //  this._firebaseService.writeUserData(this.listentry);

    this._firebaseService.getList().subscribe(listitems => {
      this.listitems = listitems;
       console.log(listitems);
    });
     


   
  }

  deleteItem(id: String) {

    console.log(id)
    this._firebaseService.deleteData(id);
     

  }
}
 
 