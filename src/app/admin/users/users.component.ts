import { Component, OnInit } from '@angular/core';

import { UserService } from "./shared/user.service"
import { User } from "./shared/user.model"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList : User[]
  constructor(public userService: UserService,public db: AngularFireDatabase,
          public storage: LocalStorage,public router: Router){ 
    
  }

  ngOnInit(){
    
    this.db.list("/profiles").snapshotChanges().subscribe(item=>{
      this.userList = []
      item.forEach(element=>{
         var y = element.payload.toJSON()
         y["key"] = element.key
         this.userList.push(y as User)
      })
    })

    this.storage.getItem("user").subscribe((user)=>{
      if(user.admin == false){
        this.router.navigate(["/"])
      }
   })
  }

}
