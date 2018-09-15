import { Injectable } from '@angular/core';
import { Subscriber } from "./subscriber.model"

import { AngularFireList, AngularFireDatabase } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  subscriberList: AngularFireList<any>
  subscriber : Subscriber = new Subscriber();

  constructor(private db: AngularFireDatabase){ 

  }

  getData(){
      this.subscriberList = this.db.list("subscriber")
  }

  insertSubscriber(subscriber: Subscriber){
      this.subscriberList.push({
          name: subscriber.name,
          email: subscriber.email,
          date: subscriber.date
      })
  }

  updateSubscriber(subscriber: Subscriber){
      this.subscriberList.update(subscriber.$key,{
        name: subscriber.name,
        email: subscriber.email,
        date: subscriber.date
      })
  }

  deleteSubscriber($key: string){
      this.subscriberList.remove($key)
  }

}
