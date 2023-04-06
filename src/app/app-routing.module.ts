import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AdminLoginComponent } from './home/admin-login/admin-login.component';
import { ManagerLoginComponent } from './home/manager-login/manager-login.component';
import { CustomerLoginComponent } from './home/customer-login/customer-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './manager/manager-dashboard/manager-dashboard.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { MainPageComponent } from './home/main-page/main-page.component';
import { CustomerSignupComponent } from './home/customer-signup/customer-signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      { path: '', redirectTo: 'main-page', pathMatch: 'full' },
      { path: 'main-page', component: MainPageComponent },
      { path: 'admin-login', component: AdminLoginComponent },
      { path: 'manager-login', component: ManagerLoginComponent },
      { path: 'customer-login', component: CustomerLoginComponent },
      { path: 'customer-signup', component: CustomerSignupComponent },

    ],
  },
  { path: 'admin-page', component: AdminDashboardComponent },
  { path: 'manager-page', component: ManagerDashboardComponent },
  { path: 'customer-page', component: CustomerDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
