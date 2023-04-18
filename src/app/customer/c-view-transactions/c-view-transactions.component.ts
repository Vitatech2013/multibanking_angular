import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManagerService } from 'src/app/manager/manager.service';

@Component({
  selector: 'app-c-view-transactions',
  templateUrl: './c-view-transactions.component.html',
  styleUrls: ['./c-view-transactions.component.scss'],
})
export class CViewTransactionsComponent {
  userTransactionList: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mapi: ManagerService
  ) {}
  ngOnInit(): void {
    console.log(this.data, 'acno');

    this.mapi.userTransactions(this.data.accountno).subscribe((res: any) => {
      this.userTransactionList = res;
      console.log(res, 'user transactions');
    });
  }
}
