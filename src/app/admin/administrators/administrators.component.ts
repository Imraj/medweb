import { Component, OnInit } from '@angular/core';
import { Administrator } from "./shared/administrator.model"
import { AdministratorService } from "./shared/administrator.service"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.css']
})
export class AdministratorsComponent implements OnInit {

  adminList : Administrator[]
  constructor(public db:AngularFireDatabase,public storage: LocalStorage, public toastr: ToastrService,
      public router: Router, public adminService: AdministratorService) 
  {

  }

  ngOnInit() {
    this.storage.getItem("user").subscribe((user)=>{
      if(user.admin == false){
        this.router.navigate(["/"])
      }
      console.log("user.admin",user.admin)
   })

    this.db.list("/profiles").snapshotChanges().subscribe(item=>{
      this.adminList = []  
      item.forEach(element=>{
         var y = element.payload.toJSON();
          y["key"] = element.key
          this.adminList.push(y as Administrator)
         
         
      })
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

  removeAdmin(email: string){
    const profile = this.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(email))
    .snapshotChanges()
    .subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        this.db.list("profiles").update(snapshot.key,{
           admin : false
        })
        this.toastr.success("User Given Admin Priviledge","Success")
        
      });
    });
  }
  

}
