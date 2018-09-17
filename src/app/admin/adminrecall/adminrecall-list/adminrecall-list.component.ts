import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { Recall } from "../shared/recall.model"
import { RecallService } from "../shared/recall.service"

@Component({
  selector: 'app-adminrecall-list',
  templateUrl: './adminrecall-list.component.html',
  styleUrls: ['./adminrecall-list.component.css']
})
export class AdminrecallListComponent implements OnInit {

  recallList : Recall[]
  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list("/recalls").snapshotChanges().subscribe(item=>{
      this.recallList = []  
      item.forEach(element=>{
         var y = element.payload.toJSON();
         y["key"] = element.key
         this.recallList.push(y as Recall)
         console.log("yrecall",y)
      })
    })
  }

}
