import{Injectable} from'@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { myList } from'../list';
 
@Injectable()
export class FirebaseService{
    listitems: FirebaseListObservable<myList[]>;
     constructor(private _af: AngularFire){

    }
 
    getList(){
        this.listitems= this._af.database.list('/list') as
        FirebaseListObservable<myList[]>;
        return this.listitems;
    }

   writeData(myList) {

    const items = this._af.database.list('list');
    items.push(myList);
   
   }

  editData(myList) {

      this._af.database.object('list/' + myList.id).set({
      item_name: myList.item_name,
         category: myList.category,
         completed : myList.completed

      }); 
   }


   deleteData(id: String) {

         console.log(id)
      this._af.database.object('list/' + id).remove(); 
    }
 
}

 