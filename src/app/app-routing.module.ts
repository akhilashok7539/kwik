import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { AddBranchComponent } from './branch/add-branch/add-branch.component';
import { BranchComponent } from './branch/branch.component';
import { EditBranchComponent } from './branch/edit-branch/edit-branch.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { AddServicesComponent } from './services/add-services/add-services.component';
import { EditServicesComponent } from './services/edit-services/edit-services.component';
import { ServicesComponent } from './services/services.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:"login"},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'services',component:ServicesComponent},
  {path:'addservices',component:AddServicesComponent},
  {path:'editservices',component:EditServicesComponent},
  {path:'branch',component:BranchComponent},
  {path:'addbranch',component:AddBranchComponent},
  {path:'editbranch',component:EditBranchComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'registeredusers',component:RegisteredUsersComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
