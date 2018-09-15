import { Component, OnInit } from '@angular/core';

import { UserService } from "./shared/user.service"
import { User } from "./shared/user.model"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList : User[]
  constructor(public userService: UserService){ 
    
  }

  ngOnInit(){
    var x = this.userService.getData()
    x.snapshotChanges().subscribe(item=>{
      this.userList = []
      item.forEach(element=>{
         var y = element.payload.toJSON()
         y["key"] = element.key
         this.userList.push(y as User)
      })
    })
  }

}
