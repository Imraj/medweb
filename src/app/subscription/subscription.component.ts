import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  subscribeNow(subForm){

    let cardno = subForm.value.cardno
    let cardyear = subForm.value.cardyear
    let cardmonth = subForm.value.cardmonth
    let cardcvv = subForm.value.cardcvv


  }

}
