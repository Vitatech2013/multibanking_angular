import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-c-edit-profile',
  templateUrl: './c-edit-profile.component.html',
  styleUrls: ['./c-edit-profile.component.scss'],
})
export class CEditProfileComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private api: CustomerService,
    private dialogRef: MatDialogRef<CEditProfileComponent>
  ) {}
  ngOnInit(): void {
    console.log(this.data);

    this.updateForm = this.fb.group({
      id: [''],
      username: ['', [Validators.required]],
      mobileno: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });

    this.updateForm.patchValue({
      id: this.data.id,
      username: this.data.username,
      mobileno: this.data.mobileno,
      emailid: this.data.emailid,
      dob: this.data.dob,
      address: this.data.address,
    });
  }

  update() {
    this.api
      .editProfile(this.data._id, this.updateForm.value)
      .subscribe((res: any) => {
        window.location.reload();
        alert('Profile Updated Successfully...');
      });
  }
}
