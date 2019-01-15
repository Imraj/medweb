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
    this.recallList = this.db.list("recalls")
  }

  insertRecall(recall: Recall){

    this.db.list("recalls").push({
      manufacturer: recall.manufacturer,
      date: recall.date,
      reason: recall.reason,
      medicine: recall.medicine
    })

  }

  updateRecall(recall: Recall){
    this.db.list("recalls").update(recall.$key,{
      medicine: recall.medicine,
      manufacturer: recall.manufacturer,
      date: recall.date,
      reason: recall.reason
     })
  }

  deleteRecall($key: string){
    this.db.list("recalls").remove($key);
  }


}
