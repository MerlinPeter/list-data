import { Component } from '@angular/core';
import { myList }    from './list';

import { FirebaseService } from './services/firebase.service';


@Component({
 
  selector: 'list-form',
  templateUrl: './list-form.component.html'
})
export class ListFormComponent {

   constructor(private _firebaseService: FirebaseService) {

  }


  Category = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new myList('18', 'orcl',this.Category[0], 'Chuck Overstreet');

  submitted = false;
  onSubmit() {
   this.submitted = true;

      this._firebaseService.writeData(this.model);

   }
 // newList() {
 //   this.model = new myList('18', 'orcl','jj', 'Chuck Overstreet');
 // }
}

/*
     key?: string,
     company?: string,
     category?: string,
     phone?: string
     */