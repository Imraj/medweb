import { Component, OnInit } from '@angular/core';
import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"

@Component({
  selector: 'app-admininsulin',
  templateUrl: './admininsulin.component.html',
  styleUrls: ['./admininsulin.component.css']
})
export class AdmininsulinComponent implements OnInit {

  insulin = {
    name: "",
    brand: "",
    type: "",
    ml: ""
  }

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
