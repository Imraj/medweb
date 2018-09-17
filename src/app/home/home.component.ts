import { Component, OnInit } from '@angular/core';

import { Router  } from "@angular/router"
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSidebar = true;
  
  constructor(private router: Router, protected storage: LocalStorage) { 
    this.storage.getItem('user').subscribe((user) => {
        console.log("res-show",user)    
    });
  }
  
  ngOnInit() {

  }

  navToExp(){
      this.router.navigate(["/expirationdate"])
  }

  navToInsulin(){
      this.router.navigate(["/insulinguide"])
  }

  navToRecall(){
      this.router.navigate(["/recalls"])
  }

}
