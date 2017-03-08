import { Component } from '@angular/core';
import { myList }    from './list';

import { FirebaseService } from './services/firebase.service';

import {ActivatedRoute, Router, CanDeactivate } from '@angular/router'

@Component({
 
  selector: 'list-form',
  templateUrl: './list-form.component.html'
})
export class ListFormComponent {

   constructor(private _firebaseService: FirebaseService,
     private router: Router) {

  }


  Category = ['Indian', 'Costco',
            'Whole Foods', 'Traders Joe'];
  model = new myList('18', 'orcl',this.Category[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {

      this.submitted = true;
     console.log(this.model.completed)
      
      this._firebaseService.writeData(this.model);
      this.router.navigate(["entirelist"]);
   }

     routerCanDeactivate(next, previous) {
        debugger;
        return confirm("Are u sure?");
    }


}

 