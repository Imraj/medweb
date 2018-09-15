import { Injectable } from '@angular/core';
import { Administrator } from "../shared/administrator.model"

import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  adminList : AngularFireList<any>
  constructor(public db: AngularFireDatabase) { 

  }

  getData(){
    this.adminList = this.db.list("profile")
  }

  deleteAdministrator($key:string){
    this.adminList.remove($key);
  }

}
