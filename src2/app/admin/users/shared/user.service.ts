import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from "angularfire2/database"
import { User } from "../shared/user.model"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList : AngularFireList<any>;
  selectedUser: User = new User()

  constructor(public db: AngularFireDatabase) { }

  getData(){
    this.userList = this.db.list("profiles")
  }

  insertUser(user: User){
    this.db.list("profiles").push({
        admin:false,
        age:"",
        country:"",
        email:user.email,
        ethnicity:"",
        fullname:user.fullname,
        gender:"",
        occupation:"",
        state:"",
        subscribed:"",
        subscribed_date:""
    })

  }

  updateUser(user: User){
    this.db.list("profiles").update(user.$key,{
      email:user.email,
      fullname:user.fullname,
    })
  }

  deleteUser($key: string){
    this.db.list("profiles").remove($key)
  }

}
