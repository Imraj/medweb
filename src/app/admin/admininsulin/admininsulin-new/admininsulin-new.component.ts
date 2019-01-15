import { Component, OnInit } from '@angular/core';
import { InsulinService } from "../shared/insulin.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admininsulin-new',
  templateUrl: './admininsulin-new.component.html',
  styleUrls: ['./admininsulin-new.component.css']
})
export class AdmininsulinNewComponent implements OnInit {

  constructor(public insulinService: InsulinService,public toastr: ToastrService) { 

  }

  ngOnInit() {
    
  }

  onSubmit(insulinForm: NgForm){
    if(insulinForm.value.$key == null)
      this.insulinService.insertInsulin(insulinForm.value)
    else
      this.insulinService.updateInsulin(insulinForm.value)
    this.resetForm(insulinForm)
    this.toastr.success("Insulin Added Successfully","Success")
  }

  resetForm(insulinForm? : NgForm){
     if(insulinForm != null)
        insulinForm.reset()

     this.insulinService.selectedInsulin = {
       $key: null,
       type: '',    
       date: '',
       note: '',
       brand: ''
     }
  }

}
