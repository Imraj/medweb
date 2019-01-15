import { Component, OnInit } from '@angular/core';

import { Medtype } from "../shared/medtype.model"
import { MedtypeService } from "../shared/medtype.service"
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-adminmedtype-list',
  templateUrl: './adminmedtype-list.component.html',
  styleUrls: ['./adminmedtype-list.component.css']
})
export class AdminmedtypeListComponent implements OnInit {


  medList : Medtype[]
  constructor(public medtypeService: MedtypeService, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list("/medtype").snapshotChanges().subscribe(item=>{
      this.medList = []  
      item.forEach(element=>{
         var y = element.payload.toJSON();
         y["$key"] = element.key
         this.medList.push(y as Medtype)
      })
    })
  }

  onEdit(med: Medtype){
    this.medtypeService.selectedMed = med
  }

  onDelete(key: string){
    this.medtypeService.deleteMed(key)
  }

}
