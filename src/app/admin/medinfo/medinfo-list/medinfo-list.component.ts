import { Component, OnInit } from '@angular/core';
import { Medinfo } from "../shared/medinfo.model";
import { MedinfoService } from "../shared/medinfo.service";

@Component({
  selector: 'app-medinfo-list',
  templateUrl: './medinfo-list.component.html',
  styleUrls: ['./medinfo-list.component.css']
})
export class MedinfoListComponent implements OnInit {

  medinfoList : Medinfo[]

  constructor(public medinfoService: MedinfoService) { 


  }

  ngOnInit() 
  {
    var x = this.medinfoService.getData();
    x.snapshotChanges().subscribe(item=>{
        this.medinfoList = [];
        item.forEach(element=>{
            var y = element.payload.toJSON()
            y["$key"] = element.key
            this.medinfoList.push(y as Medinfo)
        })
    })


  }

}
