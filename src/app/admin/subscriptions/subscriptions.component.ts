import { Component, OnInit } from '@angular/core';

import { Subscription } from "./shared/subscription.model"
import { SubscriptionService } from "./shared/subscription.service"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  subList : Subscription[]

  constructor(public subscriptionService: SubscriptionService,
        public db: AngularFireDatabase,public storage: LocalStorage,public router: Router) {

  }

  ngOnInit() {
    //var x = this.subscriptionService.getData()
    this.db.list("/profiles").snapshotChanges().subscribe(item=>{
      this.subList = []
      item.forEach(element=>{
        var y = element.payload.toJSON()
        y["key"] = element.key
        this.subList.push(y as Subscription)
      })
    })

    this.storage.getItem("user").subscribe((user)=>{
      if(user.admin == false){
        this.router.navigate(["/"])
      }
   })

  }

}
