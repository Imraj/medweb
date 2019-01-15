import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from "./about/about.component";
import { AdminComponent } from "./admin/admin.component";
import { ContactComponent } from "./contact/contact.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";
import { HomeComponent } from "./home/home.component";
import { InsulinguideComponent } from "./insulinguide/insulinguide.component";
import { LoginComponent } from "./login/login.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { ProfileComponent } from "./profile/profile.component";
import { RecallsComponent } from "./recalls/recalls.component";
import { RegisterComponent } from "./register/register.component";
import { ShareComponent } from "./share/share.component";
import { SubscriptionComponent } from "./subscription/subscription.component";
import { TermsComponent } from "./terms/terms.component";
import { ExpirationdateComponent } from "./expirationdate/expirationdate.component"

import { UsersComponent } from "./admin/users/users.component"
import { AdministratorsComponent } from "./admin/administrators/administrators.component";
import { MedinfoComponent } from "./admin/medinfo/medinfo.component";
import { AdminrecallComponent } from "./admin/adminrecall/adminrecall.component";
import { AdmininsulinComponent } from "./admin/admininsulin/admininsulin.component";
import { SubscriptionsComponent } from "./admin/subscriptions/subscriptions.component";
import { NotificationsComponent} from "./admin/notifications/notifications.component";
import { AdminprivacyComponent } from "./admin/adminprivacy/adminprivacy.component";
import { AdmintermsComponent } from "./admin/adminterms/adminterms.component";
import { AdminfaqsComponent } from "./admin/adminfaqs/adminfaqs.component";

import { AdminmedtypeComponent } from "./admin/adminmedtype/adminmedtype.component"
import { EmailsubscriberComponent } from "./admin/emailsubscriber/emailsubscriber.component"

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminComponent},
  {path:'contact',component:ContactComponent},
  {path:'faqs',component:FaqsComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'insulinguide',component:InsulinguideComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'profile',component:ProfileComponent},
  {path:'recalls',component:RecallsComponent},
  {path:'share',component:ShareComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'terms',component:TermsComponent},
  {path:'expirationdate',component:ExpirationdateComponent},

  {path:'admin/users',component:UsersComponent},
  {path:'admin/subscribers',component:EmailsubscriberComponent},
  {path:'admin/administrators',component:AdministratorsComponent},
  {path:'admin/medinfo',component:MedinfoComponent},
  {path:'admin/medtype',component:AdminmedtypeComponent},
  {path:'admin/recall',component:AdminrecallComponent},
  {path:'admin/insulin',component:AdmininsulinComponent},
  {path:'admin/subscription',component:SubscriptionsComponent},
  {path:'admin/notification',component:NotificationsComponent},
  {path:'admin/privacy',component:AdminprivacyComponent},
  {path:'admin/terms',component:AdmintermsComponent},
  {path:'admin/faqs',component:AdminfaqsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
