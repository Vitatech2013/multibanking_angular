import { Component, Inject, inject } from '@angular/core';
import { AdminService } from '../admin.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-bank',
  templateUrl: './delete-bank.component.html',
  styleUrls: ['./delete-bank.component.scss'],
})
export class DeleteBankComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: AdminService
  ) {}
  deleteItem() {
    this.api.deleteBank(this.data._id).subscribe((res: any) => {
      console.log(res, 'delete bank');
      location.reload();
    });
  }
}
