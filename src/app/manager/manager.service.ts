import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  constructor(private http: HttpClient) {}

  managerLogin(UserName: any, Password: any) {
    return this.http.get(
      'http://localhost:7736/manager/managerlogin?username=' +
        UserName +
        '&password=' +
        Password
    );
  }

  getProfile(username: any) {
    return this.http.get(
      'http://localhost:7736/manager/viewprofile?username=' + username
    );
  }
  editManagerProfile(_id: any, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.put<any>(
      'http://localhost:7736/manager/updateProfile/' + _id,
      data,
      {
        headers: headers,
      }
    );
  }
  editManagerPassword(id: any, data: any) {
    return this.http.put<any>(
      'http://localhost:7736/manager/updatepassword/' + id,
      data
    );
  }

  viewUsers() {
    return this.http.get('http://localhost:7736/admin/viewUsers');
  }

  viweCustomer(cname: any) {
    return this.http.get(
      'http://localhost:7736/user/viewAllAccount?customername=' + cname
    );
  }

  viewReqs() {
    return this.http.get('http://localhost:7736/manager/viewCustomers');
  }

  viewTransactions() {
    return this.http.get('http://localhost:7736/user/viewTransaction');
  }

  userTransactions(acno: any) {
    return this.http.get(
      'http://localhost:7736/user/viewTransactionbyAccountNo?fromActNumber=' +
        acno
    );
  }

  editStatus(_id: any, data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });
    return this.http.put<any>('http://localhost:7736/manager/' + _id, data, {
      headers: headers,
    });
  }
}
