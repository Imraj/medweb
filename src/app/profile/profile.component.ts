import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";
import { ToastrService } from "ngx-toastr"
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email : string = ""
  public loading = false;

  profile = {
    fullname : "",
    username : "",
    age:"",
    gender: "",
    occupation:"",
    country : "",
    state: "",
    ethnicity:"",
    password:""
  }

  constructor(public db:AngularFireDatabase, private router: Router,
          private toastr:ToastrService, public storage: LocalStorage) {

      this.storage.getItem("user").subscribe((user)=>{
        this.email = user.email
        this.profile.fullname = user.fullname
        this.profile.username = user.username
        this.profile.age = user.age
        this.profile.gender = user.gender
        this.profile.occupation = user.occupation
        this.profile.country = user.country
        this.profile.state = user.state
        this.profile.ethnicity = user.ethnicity
      })

  }

  ngOnInit() {
  }

  

  updateProfile(){
    var app = this
    let age = this.profile.age
    let gender = this.profile.gender
    let ethnicity = this.profile.ethnicity
    let occupation = this.profile.occupation
    let state = this.profile.state
    let country = this.profile.country

    this.loading = true
    const profile = this.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(this.email))
                        .snapshotChanges()
                        .subscribe(snapshots => {
                          snapshots.forEach(snapshot => {
                            console.log('Snapshot Key: ', snapshot.key);

                            this.db.list("profiles").update(snapshot.key,{
                                age: age,
                                gender: gender,
                                ethnicity: ethnicity,
                                occupation: occupation,
                                state: state,
                                country: country
                            })
                            this.toastr.success("Profile Updated Successfully","Success")
                            this.loading = false
                          });
                        });


    

  }

  changePassword(){
    let password = this.profile.password
  }

  navToChangepwd(){
    this.router.navigate(["/changepassword"])
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
