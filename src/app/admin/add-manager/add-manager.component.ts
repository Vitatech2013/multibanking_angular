import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss'],
})
export class AddManagerComponent implements OnInit {
  addmanagerForm!: FormGroup;
  banknameList: any;
  constructor(
    private fb: FormBuilder,
    private api: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const password = Math.floor(Math.random() * 1000000 + 1);
    this.addmanagerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: [password],
      mobileno: ['', [Validators.required]],
      address: ['', [Validators.required]],
      emailid: ['', [Validators.required]],
      bankname: ['', [Validators.required]],
      branchname: ['', [Validators.required]],
    });

    this.api.getBankname().subscribe((res: any) => {
      console.log(res, 'banknames');
      this.banknameList = res;
    });
  }

  selected(e: any) {
    let bl = this.banknameList.find((b: any) => b.bankname == e.target.value);
    console.log(bl);

    this.addmanagerForm.patchValue({
      branchname: bl.branchname,
    });
  }

  addManager() {
    this.api.addManagers(this.addmanagerForm.value).subscribe(
      (res: any) => {
        console.log(res, 'managersss');
        this.router.navigate(['/admin-page/view-manager']);
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
