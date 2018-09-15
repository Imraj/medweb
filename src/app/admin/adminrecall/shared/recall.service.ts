import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { Recall } from "./recall.model"

@Injectable({
  providedIn: 'root'
})
export class RecallService {

  recallList: AngularFireList<any>;
  selectedRecall: Recall = new Recall()

  constructor(public db: AngularFireDatabase) 
  {

  }

  getData(){
    this.recallList = this.db.list("recall")
  }

  insertRecall(recall: Recall){

    this.recallList.push({
      manufacturer: recall.manufacturer,
      date: recall.date,
      reason: recall.reason
    })

  }

  updateRecall(recall: Recall){
     this.recallList.update(recall.$key,{
      manufacturer: recall.manufacturer,
      date: recall.date,
      reason: recall.reason
     })
  }

  deleteRecall($key: string){
    this.recallList.remove($key);
  }


}
