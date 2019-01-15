import { Component, OnInit } from '@angular/core';
import { MedinfoService } from "../shared/medinfo.service";
import { NgForm } from "@angular/forms"; 
import { ToastrService } from 'ngx-toastr';
import { AngularFireList, AngularFireDatabase } from "angularfire2/database"
import { Observable } from 'rxjs';
@Component({
  selector: 'app-medinfo-new',
  templateUrl: './medinfo-new.component.html',
  styleUrls: ['./medinfo-new.component.css']
})
export class MedinfoNewComponent implements OnInit {

  adminMedtype : Observable<any[]>;
  constructor(public db: AngularFireDatabase ,public medinfoService: MedinfoService,public toastr : ToastrService){
    this.adminMedtype = this.db.list("medtype").valueChanges()
    console.log("this.adminMedtype",this.adminMedtype)
  }

  ngOnInit() {
    
  }

  onSubmit(medinfoForm: NgForm){
      //console.log("medinfoForm.value.$key",medinfoForm.value.$key)
      if(medinfoForm.value.$key == null)
          this.medinfoService.insertInfo(medinfoForm.value)
      else
          this.medinfoService.updateInfo(this.medinfoService.selectedMedinfo)
      this.resetForm(medinfoForm)
      this.toastr.success("Medinfo Created Successfully","Success")
      
  }

  resetForm(medinfoForm: NgForm){
    
      if(medinfoForm!=null)
        medinfoForm.reset();

      this.medinfoService.selectedMedinfo = {
        $key: null,
        medType: '',
        medName: '',
        medDate: '',
        medNote: ''
      }
  }

}
