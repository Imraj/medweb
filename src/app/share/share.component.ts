import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

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

  constructor(public http: Http) { }

  ngOnInit() {
  }

  shareEmail(){
    let email1 = this.share.email1
    let email2 = this.share.email2
    let email3 = this.share.email3

    this.http.get("http://000webhost.com/share.php,",{})
        
  }

}