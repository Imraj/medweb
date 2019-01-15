import { Component } from '@angular/core';
import * as $ from "jquery"
import { Router, NavigationStart } from "@angular/router"

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  admin : boolean = false
  fullname: string
  
  showSidebar : boolean = true
  pgtitle = "Med Expiration : Safely Administer Medications"

  constructor(private router: Router,private afAuth: AngularFireAuth,private storage: LocalStorage) 
  { 

    this.storage.getItem("user").subscribe((user)=>{
      if(user != null){
        this.admin = user.admin
        this.fullname = user.fullname
      }else{
        this.router.navigate(["/login"])
      }
    })

    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
         if(event.url == "/login"){
           this.showSidebar = false
         }else if(event.url == "/"){
           this.showSidebar = false
         }else if(event.url == "/register"){
           this.showSidebar = false
         }else if(event.url == "/forgotpassword"){
           this.showSidebar = false
         }else if(event.url == "/changepassword"){
          this.showSidebar = false
        }else{
          this.showSidebar = true
        }
      }
    });

    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
         if(event.url == "/insulinguide"){
           this.pgtitle = "Insulin Guide"
         }else if(event.url == "/recalls"){
           this.pgtitle = "Recalls"
         }else if(event.url == "/expirationdate"){
           this.pgtitle = "Expiration Date"
         }else{
           this.pgtitle = "Med Expiration : Safely Administer Medications"
         }
      }
    });

  }
  
  ngOnInit() {

  }

  title = 'medweb';

  
  
  public _opened: boolean = false;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  navToHome(){
    this.router.navigate(["/"])
  }

  navToAdmin(){
    this.router.navigate(["/admin"])
    
  }

  navToProfile(){
    this.router.navigate(["/profile"])
  }

  navToAbout(){
    this.router.navigate(["/about"])
  }

  navToShare(){
    this.router.navigate(["/share"])
  }

  navToFaqs(){
    this.router.navigate(["/faqs"])
  }

  navToSub(){
    this.router.navigate(["/subscription"])
  }

  navToContact(){
    this.router.navigate(["/contact"])
  }

  navToPrivacy(){
    this.router.navigate(["/privacy"])
  }

  navToTerms(){
    this.router.navigate(["/terms"])
  }

  logout(){
    this.afAuth.auth.signOut()
    this.storage.removeItem('user').subscribe(() => {});
    this.router.navigate(["/login"])
  }

}
