import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { Medtype } from "./medtype.model"

@Injectable({
  providedIn: 'root'
})
export class MedtypeService {

  medList : AngularFireList<any>;
  selectedMed : Medtype = new Medtype();

  constructor(public afDb:AngularFireDatabase) { }

  getData(){
    this.medList = this.afDb.list("medtype")
  }

  insertMed(med: Medtype){
    this.afDb.list("medtype").push({
      medname: med.medname
    })
  }

  updateMed(med: Medtype){
    this.afDb.list("medtype").update(med.$key,{
      medname: med.medname,
    })
  }

  deleteMed($key: string){
    this.afDb.list("medtype").remove($key);
  }

}
