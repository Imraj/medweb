import { Component, OnInit } from '@angular/core';

import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"

@Component({
  selector: 'app-adminrecall',
  templateUrl: './adminrecall.component.html',
  styleUrls: ['./adminrecall.component.css']
})
export class AdminrecallComponent implements OnInit {

  constructor(public storage: LocalStorage,public router: Router) {
    

  }

  ngOnInit() {
    this.storage.getItem("user").subscribe((user)=>{
      if(user.admin == false){
        this.router.navigate(["/"])
      }
      
   })
  
  }

}
