import { Component, OnInit } from '@angular/core';
import { Medinfo } from "../shared/medinfo.model";
import { MedinfoService } from "../shared/medinfo.service";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

@Component({
  selector: 'app-medinfo-list',
  templateUrl: './medinfo-list.component.html',
  styleUrls: ['./medinfo-list.component.css']
})
export class MedinfoListComponent implements OnInit {

  medinfoList : Medinfo[]

  constructor(public medinfoService: MedinfoService,public db: AngularFireDatabase) { 


  }

  ngOnInit() 
  {
    this.db.list("/medications").snapshotChanges().subscribe(item=>{
        this.medinfoList = [];
        item.forEach(element=>{
            var y = element.payload.toJSON()
            y["$key"] = element.key
            this.medinfoList.push(y as Medinfo)
        })
    })

    console.log(this.medinfoList)
  }

  onEdit(medinfo : Medinfo){
    this.medinfoService.selectedMedinfo = medinfo
    console.log("medinfo-nn",medinfo)
  }

  onDelete(key: string){
    this.medinfoService.deleteInfo(key)
  }

}
