import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-m-update-status',
  templateUrl: './m-update-status.component.html',
  styleUrls: ['./m-update-status.component.scss'],
})
export class MUpdateStatusComponent implements OnInit {
  statusForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: ManagerService,
    private dialogRef: MatDialogRef<MUpdateStatusComponent>
  ) {}
  ngOnInit(): void {
    console.log(this.data, 'ggggg');
    const accountno = Math.floor(Math.random() * 100000000000 + 1);
    const password = Math.random().toString(36).slice(-8);
    console.log(accountno, 'ac no');

    this.statusForm = this.fb.group({
      id: [''],
      accountno: accountno,
      password: password,
      customername: ['', [Validators.required]],
      bankname: ['', [Validators.required]],
      branchname: ['', [Validators.required]],
      ifsccode: ['', [Validators.required]],
      status: [''],
    });

    this.statusForm.patchValue({
      id: this.data.id,
      accountno: accountno,
      password: password,
      customername: this.data.customername,
      bankname: this.data.bankname,
      branchname: this.data.branchname,
      ifsccode: this.data.ifsccode,
      status: this.statusForm.value,
    });
  }

  statusUpdate() {
    this.api
      .editStatus(this.data._id, this.statusForm.value)
      .subscribe((res: any) => {
        console.log(res, 'updated status');
      });
  }
}
