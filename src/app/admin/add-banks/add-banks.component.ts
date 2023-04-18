import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-banks',
  templateUrl: './add-banks.component.html',
  styleUrls: ['./add-banks.component.scss'],
})
export class AddBanksComponent implements OnInit {
  addbankForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addbankForm = this.fb.group({
      bankname: ['', [Validators.required]],
      branchname: ['', [Validators.required]],
      ifsccode: ['', [Validators.required]],
    });
  }

  addBanks() {
    this.api.addBank(this.addbankForm.value).subscribe(
      (res: any) => {
        console.log(res, 'addbank');

        this.router.navigate(['/admin-page/view-bank']);
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
