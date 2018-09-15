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
    this.insulinList = this.db.list("insulin");
  }

  insertInsulin(insulin: Insulin){
    this.insulinList.push({
      name: insulin.name,
      brand: insulin.brand,
      type: insulin.type,
      ml: insulin.ml
    })
  }

  updateInsulin(insulin: Insulin){
    this.insulinList.update(insulin.$key,{
      name: insulin.name,
      brand: insulin.brand,
      type: insulin.type,
      ml: insulin.ml
    })
  }

  deleteInsulin($key: string){
    this.insulinList.remove($key)
  }

  
}
