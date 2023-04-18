import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/manager/manager.service';

@Component({
  selector: 'app-a-view-transactions',
  templateUrl: './a-view-transactions.component.html',
  styleUrls: ['./a-view-transactions.component.scss'],
})
export class AViewTransactionsComponent implements OnInit {
  transactions: any;
  constructor(private mapi: ManagerService) {}
  ngOnInit(): void {
    this.mapi.viewTransactions().subscribe((res: any) => {
      this.transactions = res;
      console.log(res, 'transactions');
    });
  }
}
