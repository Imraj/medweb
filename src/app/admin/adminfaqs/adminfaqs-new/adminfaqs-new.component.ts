import { Component, OnInit } from '@angular/core';
import { FaqsService } from "../shared/faqs.service";
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-adminfaqs-new',
  templateUrl: './adminfaqs-new.component.html',
  styleUrls: ['./adminfaqs-new.component.css']
})
export class AdminfaqsNewComponent implements OnInit {

  constructor(public faqsService: FaqsService) { }

  ngOnInit() {
    
  }

  onSubmit(faqsForm: NgForm){
      this.faqsService.insertFaq(faqsForm.value)
      this.resetForm(faqsForm)
  } 

  resetForm(faqsForm?: NgForm){
    
      if(faqsForm != null)
        faqsForm.reset()

      this.faqsService.selectedFaq = {
        $key : null,
        question : '',
        answer: ''
      }

  }

}
