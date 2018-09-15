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
    this.userList.push({
      
    })
  }

  updateUser(user: User){
    this.userList.update(user.$key,{
      
    })
  }

  deleteUser($key: string){
    this.userList.remove($key)
  }

}
