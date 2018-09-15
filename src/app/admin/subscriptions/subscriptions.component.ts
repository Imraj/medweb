import { Component, OnInit } from '@angular/core';

import { Subscription } from "./shared/subscription.model"
import { SubscriptionService } from "./shared/subscription.service"

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  subList : Subscription[]

  constructor(public subscriptionService: SubscriptionService) {

  }

  ngOnInit() {
    var x = this.subscriptionService.getData()
    x.snapshotChanges().subscribe(item=>{
      this.subList = []
      item.forEach(element=>{
        var y = element.payload.toJSON()
        y["key"] = element.key
        this.subList.push(y as Subscription)
      })
    })
  }

}
