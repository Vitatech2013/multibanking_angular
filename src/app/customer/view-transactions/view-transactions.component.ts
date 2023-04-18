import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/manager/manager.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.scss'],
})
export class ViewTransactionsComponent implements OnInit {
  transactions: any;
  constructor(private mapi: ManagerService) {}
  ngOnInit(): void {
    let u = JSON.parse(localStorage.getItem('token')!);
    console.log(u);

    this.mapi.userTransactions(u.accountno).subscribe((res: any) => {
      this.transactions = res;
      console.log(res, 'transactions');
    });
  }
}
