import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ShareComponent } from './share/share.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { InsulinguideComponent } from './insulinguide/insulinguide.component';
import { RecallsComponent } from './recalls/recalls.component';
import { ExpirationdateComponent } from './expirationdate/expirationdate.component';
import { UsersComponent } from './admin/users/users.component';
//import { SubscribersComponent } from './admin/subscribers/subscribers.component';
import { AdministratorsComponent } from './admin/administrators/administrators.component';
import { MedinfoComponent } from './admin/medinfo/medinfo.component';
import { SubscriptionsComponent } from './admin/subscriptions/subscriptions.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { AdminrecallComponent } from './admin/adminrecall/adminrecall.component';
import { AdmininsulinComponent } from './admin/admininsulin/admininsulin.component';
import { AdminprivacyComponent } from './admin/adminprivacy/adminprivacy.component';
import { AdmintermsComponent } from './admin/adminterms/adminterms.component';
import { AdminfaqsComponent } from './admin/adminfaqs/adminfaqs.component';
//import { SubscriptionsComponent } from './admin/subscriptions/subscriptions.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
import { environment } from '../environments/environment';
import { AdmininsulinListComponent } from './admin/admininsulin/admininsulin-list/admininsulin-list.component';
import { AdminrecallListComponent } from './admin/adminrecall/adminrecall-list/adminrecall-list.component';
import { AdminrecallNewComponent } from './admin/adminrecall/adminrecall-new/adminrecall-new.component';
import { MedinfoListComponent } from './admin/medinfo/medinfo-list/medinfo-list.component';
import { MedinfoNewComponent } from './admin/medinfo/medinfo-new/medinfo-new.component';
//import { SubscribersListComponent } from './admin/subscribers/subscribers-list/subscribers-list.component';
//import { SubscribersNewComponent } from './admin/subscribers/subscribers-new/subscribers-new.component';

import { FormsModule } from "@angular/forms";
import { AdminfaqsListComponent } from './admin/adminfaqs/adminfaqs-list/adminfaqs-list.component';
import { AdminfaqsNewComponent } from './admin/adminfaqs/adminfaqs-new/adminfaqs-new.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component'

import { SidebarModule, Sidebar } from "ng-sidebar";

import { LoadingModule } from 'ngx-loading'
import { ToastrModule } from "ngx-toastr"

import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';


import { AdmininsulinNewComponent } from './admin/admininsulin/admininsulin-new/admininsulin-new.component';
import { UsersNewComponent } from './admin/users/users-new/users-new.component';
import { UsersListComponent } from './admin/users/users-list/users-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap"

import { TooltipModule } from "ng2-tooltip-directive";
import { AdminmedtypeComponent } from './admin/adminmedtype/adminmedtype.component';
import { AdminmedtypeListComponent } from './admin/adminmedtype/adminmedtype-list/adminmedtype-list.component';
import { AdminmedtypeNewComponent } from './admin/adminmedtype/adminmedtype-new/adminmedtype-new.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { EmailsubscriberComponent } from './admin/emailsubscriber/emailsubscriber.component';
import { EmailsubscriberListComponent } from './admin/emailsubscriber/emailsubscriber-list/emailsubscriber-list.component';
import { EmailsubscriberNewComponent } from './admin/emailsubscriber/emailsubscriber-new/emailsubscriber-new.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    AdminComponent,
    ProfileComponent,
    AboutComponent,
    ShareComponent,
    FaqsComponent,
    SubscriptionComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    InsulinguideComponent,
    RecallsComponent,
    ExpirationdateComponent,
    UsersComponent,
    //SubscribersComponent,
    AdministratorsComponent,
    MedinfoComponent,
    SubscriptionsComponent,
    NotificationsComponent,
    AdminrecallComponent,
    AdmininsulinComponent,
    AdminprivacyComponent,
    AdmintermsComponent,
    AdminfaqsComponent,
    //AdminsubscriptionComponent,
    AdmininsulinListComponent,
    AdminrecallListComponent,
    AdminrecallNewComponent,
    MedinfoListComponent,
    MedinfoNewComponent,
    //SubscribersListComponent,
    //SubscribersNewComponent,
    AdminfaqsListComponent,
    AdminfaqsNewComponent,
    ChangepasswordComponent,
    AdmininsulinNewComponent,
    UsersNewComponent,
    UsersListComponent,
    AdminmedtypeComponent,
    AdminmedtypeListComponent,
    AdminmedtypeNewComponent,
    EmailsubscriberComponent,
    EmailsubscriberListComponent,
    EmailsubscriberNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    SidebarModule.forRoot(),
    ToastrModule.forRoot(),
    LoadingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    TooltipModule,
    NgSelectModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
