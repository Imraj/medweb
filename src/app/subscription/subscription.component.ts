import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"

import { ToastrService } from "ngx-toastr"
import { Router } from "@angular/router"
import { LocalStorage } from "@ngx-pwa/local-storage"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  email : string
  loading = false

  admin: string
  fullname: string

  constructor(public toastr: ToastrService,public router: Router,
    public storage: LocalStorage,public http: HttpClient,public db: AngularFireDatabase) 
  { 

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

  openCheckout() 
  {
    var app = this

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_0KMxtsbXPks01fPYCs3etMqW',
      locale: 'auto',

      token: function (token: any) {
        console.log("token",token)
        const body = JSON.stringify({stripetoken: token.id});
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
  
        return app.http.post("https://medexp-payment.herokuapp.com/processpay",body,httpOptions)
           .subscribe(res=>{
              console.log("Payment-Resp-2",res)
              app.loading = false
              if(res)
              {
                
                console.log("test-email",this.email)
                app.storage.getItem("user").subscribe((user)=>{
                  this.email = user.email
                  console.log("test-email-2",this.email)

                  const profile = app.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(this.email))
                  .snapshotChanges()
                  .subscribe(snapshots => {
                    snapshots.forEach(snapshot => {
                      console.log('Snapshot Key: ', snapshot.key);
                      var today = new Date()
                      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                      var dateTime = date+' '+time;
                      app.db.list("profiles").update(snapshot.key,{
                          subscribed: true,
                          subscribed_date: dateTime
                      })
                      app.loading = false
                    });
                  });
  
                  console.log("this.email",this.email)
                  const emailBody = JSON.stringify({email:this.email})
                  app.http.post("https://www.medexpiration.com/mail.php",
                                emailBody,
                                httpOptions).subscribe(res=>{
                                  console.log("res",res) 
                                },err=>{
                                  console.log("err",err)
                                })

                  const updatedProfile = app.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(this.email)).valueChanges()
                  updatedProfile.subscribe(data => {
                  
                    let user = {"age":data[0]["age"],
                                "admin":data[0]["admin"],
                                "email":data[0]["email"],
                                "ethnicity":data[0]["ethnicity"],
                                "fullname":data[0]["fullname"],
                                "gender":data[0]["gender"],
                                "occupation":data[0]["occupation"],
                                "state":data[0]["state"],
                                "country":data[0]["country"],
                                "subscribed":data[0]["subscribed"],
                                "subscribed_date":data[0]["subscribed_date"]
                    }
                    
                    console.log("str-user",user)
                    app.storage.setItem("user",user).subscribe(()=>{})
      
                  },err=>{
                    console.log("Err")
                    console.log(err)
                  });

                })

               
              }

          },err=>{
              console.log("Payment-Err",err)
              this.loading = false
          })
      }
    });

    handler.open({
      name: 'MedExp',
      description: 'Annual Subscription',
      amount: 999
    });

  }

  subscribeNow(subForm: NgForm){


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
