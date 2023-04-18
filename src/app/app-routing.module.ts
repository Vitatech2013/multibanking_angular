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
import { BankLoginComponent } from './customer/bank-login/bank-login.component';
import { NewAccountPageComponent } from './customer/new-account-page/new-account-page.component';
import { ExistingAccountPageComponent } from './customer/existing-account-page/existing-account-page.component';
import { AddBanksComponent } from './admin/add-banks/add-banks.component';
import { ViewBanksComponent } from './admin/view-banks/view-banks.component';
import { AddManagerComponent } from './admin/add-manager/add-manager.component';
import { ViewManagerComponent } from './admin/view-manager/view-manager.component';
import { ViewCustomersComponent } from './admin/view-customers/view-customers.component';
import { MProfileComponent } from './manager/m-profile/m-profile.component';
import { MViewCustomersComponent } from './manager/m-view-customers/m-view-customers.component';
import { MAccountRequestsComponent } from './manager/m-account-requests/m-account-requests.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { AddMoneyComponent } from './customer/add-money/add-money.component';
import { AccountBalanceComponent } from './customer/account-balance/account-balance.component';
import { TransferAmountComponent } from './customer/transfer-amount/transfer-amount.component';
import { ViewTransactionsComponent } from './customer/view-transactions/view-transactions.component';
import { ViewAccountComponent } from './customer/view-account/view-account.component';
import { MViewTransactionsComponent } from './manager/m-view-transactions/m-view-transactions.component';
import { CChangePswdComponent } from './customer/c-change-pswd/c-change-pswd.component';
import { MChangePswdComponent } from './manager/m-change-pswd/m-change-pswd.component';

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
      { path: 'bank-login', component: BankLoginComponent },
      { path: 'new-account', component: NewAccountPageComponent },
      { path: 'existing-account', component: ExistingAccountPageComponent },
    ],
  },
  {
    path: 'admin-page',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'add-bank', pathMatch: 'full' },
      { path: 'add-bank', component: AddBanksComponent },
      { path: 'view-bank', component: ViewBanksComponent },
      { path: 'add-manager', component: AddManagerComponent },
      { path: 'view-manager', component: ViewManagerComponent },
      { path: 'view-customer', component: ViewCustomersComponent },
    ],
  },
  {
    path: 'manager-page',
    component: ManagerDashboardComponent,
    children: [
      { path: '', redirectTo: 'm-profile', pathMatch: 'full' },
      { path: 'm-profile', component: MProfileComponent },
      { path: 'm-customer', component: MViewCustomersComponent },
      { path: 'm-request', component: MAccountRequestsComponent },
      { path: 'm-transactions', component: MViewTransactionsComponent },
      { path: 'm-pswd', component: MChangePswdComponent },
    ],
  },
  {
    path: 'customer-page',
    component: CustomerDashboardComponent,
    children: [
      { path: '', redirectTo: 'c-profile', pathMatch: 'full' },
      { path: 'c-profile', component: CustomerProfileComponent },
      { path: 'add-money', component: AddMoneyComponent },
      { path: 'balance', component: AccountBalanceComponent },
      { path: 'transfer-amount', component: TransferAmountComponent },
      { path: 'view-transactions', component: ViewTransactionsComponent },
      { path: 'view-account', component: ViewAccountComponent },
      { path: 'change-password', component: CChangePswdComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
