import { Component, OnInit } from '@angular/core';
import { FaqsService } from "../shared/faqs.service";
import { NgForm } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-adminfaqs-new',
  templateUrl: './adminfaqs-new.component.html',
  styleUrls: ['./adminfaqs-new.component.css']
})
export class AdminfaqsNewComponent implements OnInit {

  constructor(public faqsService: FaqsService,public toastr: ToastrService) { }

  ngOnInit() {
    
  }

  onSubmit(faqsForm: NgForm){
      if(faqsForm.value.$key == null)
        this.faqsService.insertFaq(faqsForm.value)
      else
        this.faqsService.updateFaq(faqsForm.value)
      this.resetForm(faqsForm)
      this.toastr.success("FAQs Submitted Successfully","Success")
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
