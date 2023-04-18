import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManagerService } from 'src/app/manager/manager.service';
import { CViewTransactionsComponent } from '../c-view-transactions/c-view-transactions.component';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss'],
})
export class ViewAccountComponent implements OnInit {
  allUsers: any;
  customer: any;
  constructor(private mapi: ManagerService, private dialog: MatDialog) {}

  ngOnInit(): void {
    let u = JSON.parse(localStorage.getItem('token')!);
    this.mapi.viweCustomer(u.customername).subscribe((res: any) => {
      console.log(res, 'cccc');
      this.customer = res;
    });
  }

  transactions(a: any) {
    this.dialog.open(CViewTransactionsComponent, {
      width: '70%',
      height: '80%',
      data: a,
    });
  }
}
