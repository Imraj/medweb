import { Component } from '@angular/core';
import * as $ from "jquery"
import { Router, NavigationStart } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showSidebar : boolean = true
  constructor(private router: Router) { 
    
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
         if(event.url == "/login"){
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
   
  }
  
  ngOnInit() {

  }

  title = 'medweb';
  
  private _opened: boolean = false;
 
  private _toggleSidebar() {
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

  }

}
