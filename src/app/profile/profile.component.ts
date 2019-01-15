import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";
import { ToastrService } from "ngx-toastr"
import { LocalStorage } from '@ngx-pwa/local-storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email : string = ""
  public loading = false;

  subEmail : string
  subFullname : string

  countryList = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	 ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	 ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	 ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	 ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	 ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	 ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	 ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	 ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	 ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	 ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	 ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	 ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	 ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
   ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
  ]

  profile = {
    fullname : "",
    username : "",
    age:"",
    gender: "Select Gender",
    occupation:"",
    country : "Select Country",
    state: "",
    ethnicity:"",
    password:"",
    newsletter: "",
  }

  admin: string
  fullname: string

  constructor(public db:AngularFireDatabase, private router: Router,private afAuth: AngularFireAuth,
          private toastr:ToastrService, public storage: LocalStorage) 
  {

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

      this.storage.getItem("user").subscribe((user)=>{
        if(user != null){
          this.admin = user.admin
          this.fullname = user.fullname
        }else{
          this.router.navigate(["/login"])
        }
      })

  }

  ngOnInit() {
    
  }

  

  updateProfile(profileForm: NgForm){
    var app = this
    this.loading = true
    console.log("this.profile - tp",this.profile)

    var ap = this
    let age = this.profile.age
    let gender = this.profile.gender
    let ethnicity = this.profile.ethnicity
    let occupation = this.profile.occupation
    let state = this.profile.state
    let country = this.profile.country
    let newsletter = this.profile.newsletter

    if(age == "" || gender == ""){
        this.loading = false
        this.toastr.error("Age and Gender are required ")
    }
    else
    {
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

          this.profile.age = age
          this.profile.occupation = occupation
          this.profile.gender = gender
          this.profile.ethnicity = ethnicity
          this.profile.state = state
          this.profile.country = country

         
        });
        this.toastr.success("Profile Updated Successfully","Success")
        this.loading = false
      });



    }
  }

  subscribeToNewsletter(){
      
      this.storage.getItem("user").subscribe((user)=>{
         this.subEmail = user.email
         this.subFullname = user.fullname

         this.db.list("/newsletter").push({"email":this.subEmail,"fullname":this.subFullname})
      })
      
  }

  changePassword(){
    let password = this.profile.password
  }

  navToChangepwd(){
      this.afAuth.auth.signOut()
      this.storage.removeItem('user').subscribe(() => {});
      this.router.navigate(["/forgotpassword"])
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
