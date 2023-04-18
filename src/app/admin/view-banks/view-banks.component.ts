import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatDialog } from '@angular/material/dialog';
import { EditBankComponent } from '../edit-bank/edit-bank.component';
import { DeleteBankComponent } from '../delete-bank/delete-bank.component';

@Component({
  selector: 'app-view-banks',
  templateUrl: './view-banks.component.html',
  styleUrls: ['./view-banks.component.scss'],
})
export class ViewBanksComponent implements OnInit {
  allBanks: any;
  constructor(private api: AdminService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.api.getBanks().subscribe((res: any) => {
      console.log(res, 'banks');
      this.allBanks = res;
    });
  }

  editBank(a: any) {
    this.dialog.open(EditBankComponent, {
      width: '60%',
      height:'60%',
      data: a,
    });
  }

  deleteBank(d: any) {
    this.dialog.open(DeleteBankComponent, {
      width: '40%',
      height: '30%',
      data: d,
    });
  }
}
