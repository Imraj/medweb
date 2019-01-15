import { Component, OnInit } from '@angular/core';

import { Router  } from "@angular/router"
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  admin: string
  fullname: string

  constructor(private router: Router, protected storage: LocalStorage) {

    this.storage.getItem("user").subscribe((user)=>{
      if(user != null){
        this.admin = user.admin
        this.fullname = user.fullname
      }else{
        this.router.navigate(["/login"])
      }
    })

  }

  ngOnInit() {
  }

}
