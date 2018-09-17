import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"

import { ToastrService } from "ngx-toastr"
import { Router } from "@angular/router"
import { LocalStorage } from "@ngx-pwa/local-storage"

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  email : string = ""
  constructor(public toastr: ToastrService,public router: Router,public storage: LocalStorage) { 

  }

  ngOnInit() {

  }

  openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_LFo0YaVcnQ2PpM5EAibqhEWJ',
      locale: 'auto',

      token: function (token: any) {
            this.http.post("https://medpayment.herokuapp.com/processpay",{stripetoken:token.id})
            .subscribe(res=>{
              console.log("Payment-Resp-2",res)
              this.loading = false
              if(res){
                this.http.post("https://medexp.000webhostapp.com/mail.php",{
                  email: this.email
                })
                const profile = this.db.list("/profiles", ref=> ref.orderByChild("email").equalTo(this.email))
                .snapshotChanges()
                .map(changes=>{
                  return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
                })
                .subscribe(snapshots => {
                  snapshots.forEach(snapshot => {
                    console.log('Snapshot Key: ', snapshot.key);
                    var today = new Date()
                    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    var dateTime = date+' '+time;
                    this.db.list("profiles").update(snapshot.key,{
                        subscribed: true,
                        subscribed_date: dateTime
                    })
                    this.loading = false
                  });
                });
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
      amount: 2000
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
