import { Component, OnInit } from '@angular/core';

import { Router  } from "@angular/router"
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

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
