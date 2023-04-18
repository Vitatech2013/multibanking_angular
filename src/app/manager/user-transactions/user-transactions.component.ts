import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.scss'],
})
export class UserTransactionsComponent implements OnInit {
  userTransactionList: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ManagerService
  ) {}
  ngOnInit(): void {
    console.log(this.data.accountno, 'acno');



    this.api.userTransactions(this.data.accountno).subscribe((res: any) => {
      this.userTransactionList = res;
      console.log(res, 'user transactions');
    });
  }
}
