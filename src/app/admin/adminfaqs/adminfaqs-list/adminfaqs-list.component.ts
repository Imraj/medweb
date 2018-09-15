import { Component, OnInit } from '@angular/core';

import { Faqs } from "../shared/faqs.model"
import { FaqsService } from "../shared/faqs.service"

@Component({
  selector: 'app-adminfaqs-list',
  templateUrl: './adminfaqs-list.component.html',
  styleUrls: ['./adminfaqs-list.component.css']
})
export class AdminfaqsListComponent implements OnInit {


  faqList : Faqs[]
  constructor(public faqsService: FaqsService){

  }

  ngOnInit(){
    var x = this.faqsService.getData()
    x.snapshotChanges().subscribe(item=>{
      this.faqList = []  
      item.forEach(element=>{
         var y = element.payload.toJSON();
         y["key"] = element.key
         this.faqList.push(y as Faqs)
      })
    })
  }

}
