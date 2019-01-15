import { Component, OnInit } from '@angular/core';
import { Insulin } from "../shared/insulin.model"
import { InsulinService } from "../shared/insulin.service"

import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

@Component({
  selector: 'app-admininsulin-list',
  templateUrl: './admininsulin-list.component.html',
  styleUrls: ['./admininsulin-list.component.css']
})
export class AdmininsulinListComponent implements OnInit {

  insulinList: Insulin[]
  constructor(public db:AngularFireDatabase,public insulinService: InsulinService) { }

  ngOnInit() {
   
    this.db.list("/insulinguides").snapshotChanges().subscribe(item=>{
      this.insulinList = []  
      item.forEach(element=>{
         var y = element.payload.toJSON();
         y["$key"] = element.key
         this.insulinList.push(y as Insulin)
      })
    })
    
    console.log(this.insulinList)
    
    
  }

  onEdit(ins: Insulin){
    this.insulinService.selectedInsulin = ins
  }

  onDelete(key:string){
    this.insulinService.deleteInsulin(key)
  }

}
