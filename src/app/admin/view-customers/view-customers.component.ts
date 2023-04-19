import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ManagerService } from 'src/app/manager/manager.service';
import { MatDialog } from '@angular/material/dialog';
import { AViewTransactionsComponent } from '../a-view-transactions/a-view-transactions.component';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.scss'],
})
export class ViewCustomersComponent implements OnInit {
  allUsers: any;
  customer: any;
  banks: boolean = false;
  constructor(
    private api: AdminService,
    private mapi: ManagerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.api.viweCustomers().subscribe((res: any) => {
      console.log(res, 'users');
      this.allUsers = res;
    });
  }

  showAccount(a: any) {
    this.banks = true;
    this.mapi.viweCustomer(a.username).subscribe((res: any) => {
      this.customer = res;
    });
  }

  transactions(a: any) {
    this.dialog.open(AViewTransactionsComponent, {
      width: '70%',
      height: '80%',
      data: a,
    });
  }
  back() {
    window.location.reload();
  }
}
