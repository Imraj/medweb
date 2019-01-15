import { Component, OnInit } from '@angular/core';

import { Emailsubscription } from "../shared/emailsubscription.model"
import { EmailsubscriptionService } from "../shared/emailsubscription.service"

import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

import { LocalStorage } from "@ngx-pwa/local-storage"
import { Router } from "@angular/router"

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emailsubscriber-list',
  templateUrl: './emailsubscriber-list.component.html',
  styleUrls: ['./emailsubscriber-list.component.css']
})
export class EmailsubscriberListComponent implements OnInit {

  subList : Emailsubscription[]

  constructor(public subscriptionService: EmailsubscriptionService, public toastr: ToastrService,
        public db: AngularFireDatabase,public storage: LocalStorage,public router: Router) {

  }

  ngOnInit() {
    //var x = this.subscriptionService.getData()
    this.db.list("/profiles").snapshotChanges().subscribe(item=>{
      this.subList = []
      item.forEach(element=>{
        var y = element.payload.toJSON()
        y["key"] = element.key
        this.subList.push(y as Emailsubscription)
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

        //this.toastr.success("User subscription status changed","Success")
        
      });
    });

  }

}
