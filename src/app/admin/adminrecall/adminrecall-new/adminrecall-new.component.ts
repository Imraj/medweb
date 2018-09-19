import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import {RecallService} from "../shared/recall.service"
import { Recall } from "../shared/recall.model"

@Component({
  selector: 'app-adminrecall-new',
  templateUrl: './adminrecall-new.component.html',
  styleUrls: ['./adminrecall-new.component.css']
})
export class AdminrecallNewComponent implements OnInit {

  constructor(public recallService: RecallService) { }

  ngOnInit() {
    
  }

  submitForm(adminRecallForm : NgForm){
    this.recallService.insertRecall(adminRecallForm.value)
    this.resetForm(adminRecallForm)
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
