import { Component, OnInit } from '@angular/core';
import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"

@Component({
  selector: 'app-adminprivacy',
  templateUrl: './adminprivacy.component.html',
  styleUrls: ['./adminprivacy.component.css']
})
export class AdminprivacyComponent implements OnInit {

  constructor(public storage: LocalStorage,public router: Router) {
    

  }

  ngOnInit() {
    this.storage.getItem("user").subscribe((user)=>{
      if(user.admin == false){
        this.router.navigate(["/"])
      }
      console.log("user.admin",user.admin)
   })
  
  }

}
