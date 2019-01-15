import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import {RecallService} from "../shared/recall.service"
import { Recall } from "../shared/recall.model"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminrecall-new',
  templateUrl: './adminrecall-new.component.html',
  styleUrls: ['./adminrecall-new.component.css']
})
export class AdminrecallNewComponent implements OnInit {

  constructor(public recallService: RecallService,public toastr: ToastrService) { }

  ngOnInit() {
    
  }

  submitForm(adminRecallForm : NgForm){
    if(adminRecallForm.value.$key == null)
      this.recallService.insertRecall(adminRecallForm.value)
    else
      this.recallService.updateRecall(adminRecallForm.value)
      
    this.resetForm(adminRecallForm)
    this.toastr.success("Data Submited Successfully","Success")
  }

  resetForm(adminRecallForm?: NgForm){
    
    if(adminRecallForm != null)
      adminRecallForm.reset()

    this.recallService.selectedRecall = {
        $key : null,
        manufacturer: "",
        medicine:"",
        date: "",
        reason: ""
    }

}

}
