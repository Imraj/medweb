import { Component, OnInit } from '@angular/core';

import { Router  } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

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
