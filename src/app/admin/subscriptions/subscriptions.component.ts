import { Component, OnInit } from '@angular/core';

import { Subscription } from "./shared/subscription.model"
import { SubscriptionService } from "./shared/subscription.service"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  subList : Subscription[]

  constructor(public subscriptionService: SubscriptionService, public toastr: ToastrService,
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

  onDelete(key: string){
    this.subscriptionService.deleteSubscription(key)
  }

  disableSub(email: string){

    const profile = this.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(email))
    .snapshotChanges()
    .subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        console.log('Snapshot Key: ', snapshot.key);
        this.db.list("profiles").update(snapshot.key,{
            subscribed: false,
        })

        this.toastr.success("User subscription status changed","Success")
        
      });
    });

  }

  enableSub(email: string){

    var today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    const profile = this.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(email))
    .snapshotChanges()
    .subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.db.list("profiles").update(snapshot.key,{
            subscribed: true,
            subscribed_date: dateTime
        })

        //this.toastr.success("User subscription status changed","Success")
      });
    });

  }

}
