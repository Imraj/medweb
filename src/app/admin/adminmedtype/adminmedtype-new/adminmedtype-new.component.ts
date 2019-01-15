import { Component, OnInit } from '@angular/core';

import { MedtypeService } from "../shared/medtype.service"
import { Medtype } from "../shared/medtype.model"
import { NgForm } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminmedtype-new',
  templateUrl: './adminmedtype-new.component.html',
  styleUrls: ['./adminmedtype-new.component.css']
})
export class AdminmedtypeNewComponent implements OnInit {

  constructor(public medtypeService: MedtypeService, public toastr: ToastrService) { 

  }

  ngOnInit() {

  }

  onSubmit(medForm: NgForm){
    if(medForm.value.$key == null)
      this.medtypeService.insertMed(medForm.value)
    else
      this.medtypeService.updateMed(medForm.value)
    this.resetForm(medForm)
    this.toastr.success("Medication Type Submitted Successfully","Success")
  } 

  resetForm(faqsForm?: NgForm){
  
    if(faqsForm != null)
      faqsForm.reset()

    this.medtypeService.selectedMed = {
      $key : null,
      medname: ''
    }

  }

}
