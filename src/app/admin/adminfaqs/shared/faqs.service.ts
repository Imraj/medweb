import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { Faqs } from './faqs.model';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  faqList:  AngularFireList<any>;
  selectedFaq: Faqs = new Faqs();

  constructor(private db: AngularFireDatabase) { }

  getData(){
    this.faqList = this.db.list("faqs");
  }

  insertFaq(faq: Faqs){
     this.faqList.push({
       answer: faq.answer,
       question: faq.question
     })
  }

  updateFaq(faq: Faqs){
      this.faqList.update(faq.$key,{
        answer: faq.answer,
        question: faq.question
      })
  }

  deleteFaq($key: string){
     this.faqList.remove($key);
  }

}
