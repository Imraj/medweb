import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from "angularfire2/database"
import { Medinfo } from "./medinfo.model"

@Injectable({
  providedIn: 'root'
})
export class MedinfoService {

  medInfoList: AngularFireList<any>
  selectedMedinfo : Medinfo = new Medinfo()

  constructor(private db: AngularFireDatabase) {

  }

  getData(){
    this.medInfoList = this.db.list("medications")
  }

  insertInfo(medinfo: Medinfo){
   this.db.list("medications").push({
      medType: medinfo.medType,
      medBrand: medinfo.medBrand,
      medDate: medinfo.medDate,
      medNote: medinfo.medNote
    })
  }

  updateInfo(medinfo: Medinfo){
   this.db.list("medications").update(medinfo.$key,{
      medType: medinfo.medType,
      medBrand: medinfo.medBrand,
      medDate: medinfo.medDate,
      medNote: medinfo.medNote
    })
  }

  deleteInfo($key: string){
   this.db.list("medications").remove($key)
  }

}
