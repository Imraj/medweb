import { Injectable } from '@angular/core';
import { Insulin } from "./insulin.model";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

@Injectable({
  providedIn: 'root'
})
export class InsulinService {

  insulinList: AngularFireList<any>;
  selectedInsulin : Insulin = new Insulin();

  constructor(private db: AngularFireDatabase) { }

  getData(){
    this.insulinList = this.db.list("insulinguides");
  }

  insertInsulin(insulin: Insulin){
    this.db.list("insulinguides").push({
      name: insulin.name, // generic
      type: insulin.type,   
      date: insulin.date,
      note: insulin.note,
      brand: insulin.brand
    })
  }

  updateInsulin(insulin: Insulin){
    this.db.list("insulinguides").update(insulin.$key,{
      name: insulin.name, // generic
      type: insulin.type,
      date: insulin.date, 
      note: insulin.note,
      brand: insulin.brand
    })
  }

  deleteInsulin($key: string){
    this.db.list("insulinguides").remove($key)
  }

  
}
