import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-m-edit-profile',
  templateUrl: './m-edit-profile.component.html',
  styleUrls: ['./m-edit-profile.component.scss'],
})
export class MEditProfileComponent implements OnInit {
  updateForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: ManagerService,
    private dialogRef: MatDialogRef<MEditProfileComponent>
  ) {}
  ngOnInit(): void {
    console.log(this.data);

    this.updateForm = this.fb.group({
      id: [''],
      username: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      bankname: ['', [Validators.required]],
      branchname: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
    this.updateForm.patchValue({
      id: this.data.id,
      username: this.data.username,
      mobileno: this.data.mobileno,
      emailid: this.data.emailid,
      bankname: this.data.bankname,
      branchname: this.data.branchname,
      address: this.data.address,
    });
  }

  update() {
    this.api
      .editManagerProfile(this.data._id, this.updateForm.value)
      .subscribe((res: any) => {
        window.location.reload();
        alert('Profile Updated Successfully...');
      });
  }
}
