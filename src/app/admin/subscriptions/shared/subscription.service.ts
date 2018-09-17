import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { Subscription } from "../shared/subscription.model"

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  subList : AngularFireList<any>;

  constructor(public db: AngularFireDatabase) { }

  getData(){
    this.subList = this.db.list("profile")
  }

  deleteSubscription($key: string){
    this.subList.remove($key)
  }

}
