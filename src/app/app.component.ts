import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

 

 @Component({
  selector: 'app-root',
 templateUrl: './app.html',
 providers: [FirebaseService] 
 
})
export class AppComponent  {
  listitems: myList[];
   
   title ="Grozery App"
  // private experiments: myList[] = [
   // {key: "sasdf", company: 'Mr. Nice' ,category: 'Mr. Nice' , phone :'2323' }];
    
 //  listentry: myList = ({key: "3054", company: 'asdfasd. working' ,
  //   category: 'store boy' , phone :'2323' });

 


  constructor(private _firebaseService: FirebaseService ) {

  }
   
  ngOnInit() {
    
  }

  
}
 
 