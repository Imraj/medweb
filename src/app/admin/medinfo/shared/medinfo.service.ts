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
    this.medInfoList = this.db.list("expirationdate")
  }

  insertInfo(medinfo: Medinfo){
    this.medInfoList.push({
      medType: medinfo.medType,
      medName: medinfo.medName,
      medDate: medinfo.medDate
    })
  }

  updateInfo(medinfo: Medinfo){
    this.medInfoList.update(medinfo.$key,{
      medType: medinfo.medType,
      medName: medinfo.medName,
      medDate: medinfo.medDate
    })
  }

  deleteInfo($key: string){
    this.medInfoList.remove($key)
  }

}
