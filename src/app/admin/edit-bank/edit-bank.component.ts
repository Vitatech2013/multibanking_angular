import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-bank',
  templateUrl: './edit-bank.component.html',
  styleUrls: ['./edit-bank.component.scss'],
})
export class EditBankComponent implements OnInit {
  editbankForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: AdminService,
    private dialogRef: MatDialogRef<EditBankComponent>
  ) {}

  ngOnInit(): void {
    this.editbankForm = this.fb.group({
      id: [''],
      bankname: ['', [Validators.required]],
      branchname: ['', [Validators.required]],
      ifsccode: ['', [Validators.required]],
    });

    this.editbankForm.patchValue({
      id: this.data.id,
      bankname: this.data.bankname,
      branchname: this.data.branchname,
      ifsccode: this.data.ifsccode,
    });
  }

  update() {
    this.api
      .editBank(this.data._id, this.editbankForm.value)
      .subscribe((res: any) => {
        console.log(res, 'bank update');
        this.dialogRef.close();
      },
      (err) => {
        alert('update Unsucessfull');
      }
      );
      window.location.reload();
  }
}
