import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"

import { ToastrService } from "ngx-toastr"
import { Router } from "@angular/router"
import { LocalStorage } from "@ngx-pwa/local-storage"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';

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

  card = {
    cardno: "",
    cardcvv: "",
    cardmonth : 0,
    cardyear: 0
  }
  subscribed : boolean

  card_brand: string;
  card_last4: string;
  card_exp_month: string;
  card_exp_year: string;

  constructor(public toastr: ToastrService,public router: Router,private afAuth: AngularFireAuth,
    public storage: LocalStorage,public http: HttpClient,public db: AngularFireDatabase) 
  { 

    this.storage.getItem("user").subscribe((user)=>{
      this.subscribed = user.subscribed
      console.log("ss",this.subscribed)
      if(user != null){
        this.admin = user.admin
        this.fullname = user.fullname
      }else{
        this.router.navigate(["/login"])
      }

     
        this.email = user.email
        const profile = this.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(this.email))
        .snapshotChanges()
        .subscribe(item => {
          item.forEach(element=>{
            var y = element.payload.toJSON();
            y["key"] = element.key
            this.subscribed = y["subscribed"]

            this.card_brand = y["card_brand"]
            this.card_last4 = y["card_last4"]
            this.card_exp_month = y["card_exp_month"]
            this.card_exp_year = y["card_exp_year"]
          })
        

      })



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

        console.log("Token")
        console.log("token",token.card)
        console.log(token.card.exp_month,token.card.exp_year,token.card.last4,token.card.id,token.card.brand)

        const body = JSON.stringify({stripetoken: token.id});
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
  
        return app.http.post("https://medpayment.herokuapp.com/processpay",body,httpOptions)
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
                          card_last4: token.card.last4,
                          card_exp_month: token.card.exp_month,
                          card_exp_year: token.card.exp_year,
                          card_id: token.card.id,
                          card_brand: token.card.brand,
                          token_id: token.id,
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

  changeCard(){

    var app = this

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_0KMxtsbXPks01fPYCs3etMqW',
      locale: 'auto',

      token: function (token: any) {

        console.log("Token")
        console.log("token",token.card)
        console.log(token.card.exp_month,token.card.exp_year,token.card.last4,token.card.id,token.card.brand)

        const body = JSON.stringify({stripetoken: token.id});
        const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
  
        app.storage.getItem("user").subscribe((user)=>{
          this.email = user.email
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
                  card_last4: token.card.last4,
                  card_exp_month: token.card.exp_month,
                  card_exp_year: token.card.exp_year,
                  card_id: token.card.id,
                  card_brand: token.card.brand,
                  token_id: token.id
              })
              app.loading = false
            });
          });
        })

      }
    });

    handler.open({
      name: 'Med Expiration',
      description: 'Change Credit Card',
      amount: 0
    });

  }


  logout(){
    this.afAuth.auth.signOut()
    this.storage.removeItem('user').subscribe(() => {});
    this.router.navigate(["/login"])
  }

}
