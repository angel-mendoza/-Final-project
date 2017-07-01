import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ValidateService } from './services/validate.service';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes=[
  {path:'', component: HomeComponent},
  {path:'sign_up', component: RegisterComponent},
  {path:'sign_in', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService,AlertService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
