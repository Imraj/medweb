import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase'
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from "@angular/router"
import { ToastrService } from "ngx-toastr"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expirationdate',
  templateUrl: './expirationdate.component.html',
  styleUrls: ['./expirationdate.component.css']
})
export class ExpirationdateComponent implements OnInit {
  items: Observable<any[]>;
  constructor(public db:AngularFireDatabase,public router: Router,
    public afAuth: AngularFireAuth,private toastr: ToastrService)
    {
      this.items = this.db.list("/medications").valueChanges()
    }

  ngOnInit() {

  }

  navToExpirationdate(){
    this.router.navigate(["/expirationdate"])
  }

  navToInsulin(){
    this.router.navigate(["/insulinguide"])
  }

  navToRecall(){
    this.router.navigate(["/recalls"])
  }

}
