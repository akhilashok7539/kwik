import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AddServicesComponent } from './services/add-services/add-services.component';
import { EditServicesComponent } from './services/edit-services/edit-services.component';
import { BranchComponent } from './branch/branch.component';
import { AddBranchComponent } from './branch/add-branch/add-branch.component';
import { EditBranchComponent } from './branch/edit-branch/edit-branch.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { BookingsComponent } from './bookings/bookings.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AddServicesComponent,
    EditServicesComponent,
    BranchComponent,
    AddBranchComponent,
    EditBranchComponent,
    RegisteredUsersComponent,
    BookingsComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,      
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
