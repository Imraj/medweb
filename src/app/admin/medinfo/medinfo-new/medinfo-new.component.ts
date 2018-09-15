import { Component, OnInit } from '@angular/core';
import { MedinfoService } from "../shared/medinfo.service";
import { NgForm } from "@angular/forms"; 

@Component({
  selector: 'app-medinfo-new',
  templateUrl: './medinfo-new.component.html',
  styleUrls: ['./medinfo-new.component.css']
})
export class MedinfoNewComponent implements OnInit {

  constructor(public medinfoService: MedinfoService){

  }

  ngOnInit() {

  }

  onSubmit(medinfoForm: NgForm){
      this.medinfoService.insertInfo(medinfoForm.value)
      this.resetForm(medinfoForm)
  }

  resetForm(medinfoForm: NgForm){
    
      if(medinfoForm!=null)
        medinfoForm.reset();

      this.medinfoService.selectedMedinfo = {
        $key: '',
        medType: '',
        medName: '',
        medDate: ''
      }
  }

}
