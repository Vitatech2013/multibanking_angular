import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-manager',
  templateUrl: './delete-manager.component.html',
  styleUrls: ['./delete-manager.component.scss'],
})
export class DeleteManagerComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: AdminService
  ) {}

  deleteItem() {
    this.api.deleteManagers(this.data._id).subscribe((res: any) => {
      console.log(res, 'deletemanager');
      
      location.reload();
    });
  }
}
