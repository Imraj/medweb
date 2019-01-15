import { Component, OnInit } from '@angular/core';

import { UserService } from "../shared/user.service"
import { User } from "../shared/user.model"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userList : User[]
  constructor(public userService: UserService,public db: AngularFireDatabase,
          public storage: LocalStorage,public router: Router,public toastr: ToastrService){ 
    
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

  makeAdmin(email: string){

    const profile = this.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(email))
    .snapshotChanges()
    .subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        this.db.list("profiles").update(snapshot.key,{
           admin : true
        })
        this.toastr.success("User Given Admin Priviledge","Success")
        
      });
    });

  }

  giveSubscription(email: string){

    const profile = this.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(email))
    .snapshotChanges()
    .subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        this.db.list("profiles").update(snapshot.key,{
           subscribed : true
        })
        this.toastr.success("User Subscription Successful","Success")
        
      });
    });

  }

  onEdit(user: User){
     console.log("onEdit user: ", user)
     this.userService.selectedUser = user
  }

  deleteUser(key: string, email: string){
    alert(key + " " + email)
    //this.userService.deleteUser(key)
  }


}
