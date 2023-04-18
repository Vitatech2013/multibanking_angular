import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material/material.module';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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
import { EditBankComponent } from './admin/edit-bank/edit-bank.component';
import { DeleteBankComponent } from './admin/delete-bank/delete-bank.component';
import { DeleteManagerComponent } from './admin/delete-manager/delete-manager.component';
import { MProfileComponent } from './manager/m-profile/m-profile.component';
import { MViewCustomersComponent } from './manager/m-view-customers/m-view-customers.component';
import { MAccountRequestsComponent } from './manager/m-account-requests/m-account-requests.component';
import { MViewTransactionsComponent } from './manager/m-view-transactions/m-view-transactions.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { AddMoneyComponent } from './customer/add-money/add-money.component';
import { AccountBalanceComponent } from './customer/account-balance/account-balance.component';
import { TransferAmountComponent } from './customer/transfer-amount/transfer-amount.component';
import { ViewAccountComponent } from './customer/view-account/view-account.component';
import { ViewTransactionsComponent } from './customer/view-transactions/view-transactions.component';
import { MUpdateStatusComponent } from './manager/m-update-status/m-update-status.component';
import { UserTransactionsComponent } from './manager/user-transactions/user-transactions.component';
import { AViewTransactionsComponent } from './admin/a-view-transactions/a-view-transactions.component';
import { CViewTransactionsComponent } from './customer/c-view-transactions/c-view-transactions.component';
import { CEditProfileComponent } from './customer/c-edit-profile/c-edit-profile.component';
import { CChangePswdComponent } from './customer/c-change-pswd/c-change-pswd.component';
import { MEditProfileComponent } from './manager/m-edit-profile/m-edit-profile.component';
import { MChangePswdComponent } from './manager/m-change-pswd/m-change-pswd.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    ManagerLoginComponent,
    CustomerLoginComponent,
    AdminDashboardComponent,
    ManagerDashboardComponent,
    CustomerDashboardComponent,
    MainPageComponent,
    CustomerSignupComponent,
    BankLoginComponent,
    NewAccountPageComponent,
    ExistingAccountPageComponent,
    AddBanksComponent,
    ViewBanksComponent,
    AddManagerComponent,
    ViewManagerComponent,
    ViewCustomersComponent,
    EditBankComponent,
    DeleteBankComponent,
    DeleteManagerComponent,
    MProfileComponent,
    MViewCustomersComponent,
    MAccountRequestsComponent,
    MViewTransactionsComponent,
    CustomerProfileComponent,
    AddMoneyComponent,
    AccountBalanceComponent,
    TransferAmountComponent,
    ViewAccountComponent,
    ViewTransactionsComponent,
    MUpdateStatusComponent,
    UserTransactionsComponent,
    AViewTransactionsComponent,
    CViewTransactionsComponent,
    CEditProfileComponent,
    CChangePswdComponent,
    MEditProfileComponent,
    MChangePswdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
