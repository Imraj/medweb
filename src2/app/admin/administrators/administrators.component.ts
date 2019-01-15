import { Component, OnInit } from '@angular/core';
import { Administrator } from "./shared/administrator.model"
import { AdministratorService } from "./shared/administrator.service"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"

@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.css']
})
export class AdministratorsComponent implements OnInit {

  adminList : Administrator[]
  constructor(public db:AngularFireDatabase,public storage: LocalStorage,
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
  
  onDelete(key: string){
    this.adminService.deleteAdministrator(key)
  }
  

}
