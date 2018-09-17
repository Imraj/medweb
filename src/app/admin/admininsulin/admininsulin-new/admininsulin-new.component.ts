import { Component, OnInit } from '@angular/core';
import { InsulinService } from "../shared/insulin.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-admininsulin-new',
  templateUrl: './admininsulin-new.component.html',
  styleUrls: ['./admininsulin-new.component.css']
})
export class AdmininsulinNewComponent implements OnInit {

  constructor(private insulinService: InsulinService) { 

  }

  ngOnInit() {
    
  }

  onSubmit(insulinForm: NgForm){
    this.insulinService.insertInsulin(insulinForm.value)
    this.resetForm(insulinForm)
  }

  resetForm(insulinForm? : NgForm){
     if(insulinForm != null)
        insulinForm.reset()

     this.insulinService.selectedInsulin = {
       $key: null,
       name: '',
       brand: '',
       type: '',
       ml:''
     }
  }

}
