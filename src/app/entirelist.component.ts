import { Component } from '@angular/core';
import { myList } from './list';

import { FirebaseService } from './services/firebase.service';


import { AngularFire, FirebaseListObservable } from 'angularfire2' ;
@Component({
  selector: 'entire-list',
  providers: [FirebaseService] ,
  templateUrl: './entirelist.component.html'

 
})
export class EntireListComponent  {
  listitems: myList[];
   
   title ="Grozery App"
  // private experiments: myList[] = [
   // {key: "sasdf", company: 'Mr. Nice' ,category: 'Mr. Nice' , phone :'2323' }];
    
 //  listentry: myList = ({key: "3054", company: 'asdfasd. working' ,
  //   category: 'store boy' , phone :'2323' });

 
public toggles = [
    { value: true, display: 'Toggled' },
    { value: false, display: 'UnToggled' },
];

  constructor(private _firebaseService: FirebaseService) {

  }
  ngOnInit() {
   //  this._firebaseService.writeUserData(this.listentry);

    this._firebaseService.getList().subscribe(listitems => {
      this.listitems = listitems;

    });
     


   
  }

  deleteItem(id: String) {

    this._firebaseService.deleteData(id);
     

  }
}
 
 