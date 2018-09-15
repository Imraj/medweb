import { Component, OnInit } from '@angular/core';
import { Subscriber } from "../shared/subscriber.model"
import { SubscriberService } from "../shared/subscriber.service"

@Component({
  selector: 'app-subscribers-list',
  templateUrl: './subscribers-list.component.html',
  styleUrls: ['./subscribers-list.component.css']
})
export class SubscribersListComponent implements OnInit {

  subList : Subscriber[]
  constructor(public subscriberService: SubscriberService){

  }

  ngOnInit() {
      var x = this.subscriberService.getData()
      x.snapshotChanges().subscribe(item=>{
        this.subList = []
        item.forEach(element=>{
          var y = element.payload.toJSON()
          y["key"] = element.key
          this.subList.push(y as Subscriber)
        })

      })
  }

}
