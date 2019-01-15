import { Component, OnInit } from '@angular/core';

import { Faqs } from "../shared/faqs.model"
import { FaqsService } from "../shared/faqs.service"
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
@Component({
  selector: 'app-adminfaqs-list',
  templateUrl: './adminfaqs-list.component.html',
  styleUrls: ['./adminfaqs-list.component.css']
})
export class AdminfaqsListComponent implements OnInit {

  faqList : Faqs[]
  constructor(public faqsService: FaqsService,public db:AngularFireDatabase){

  }

  ngOnInit(){
    this.db.list("/faqs").snapshotChanges().subscribe(item=>{
      this.faqList = []  
      item.forEach(element=>{
         var y = element.payload.toJSON();
         y["$key"] = element.key
         this.faqList.push(y as Faqs)
      })
    })
  }

  onEdit(faq: Faqs){
    this.faqsService.selectedFaq = faq
  }

  onDelete(key: string){
    this.faqsService.deleteFaq(key)
  }

}
