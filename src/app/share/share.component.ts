import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router"

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {


  share = {
    email1:"",
    email2:"",
    email3:""
  }

  constructor(public http: HttpClient,public router: Router) { }

  ngOnInit() {
  }

  shareEmail(){
    let email1 = this.share.email1
    let email2 = this.share.email2
    let email3 = this.share.email3

    //this.http.get("http://000webhost.com/share.php,",{})
        
  }

  navToExpirationdate(){
    this.router.navigate(["/expirationdate"])
  }

  navToInsulin(){
    this.router.navigate(["/insulinguide"])
  }

  navToRecall(){
    this.router.navigate(["/recalls"])
  }

}
