import { environment } from './../../environments/environment.prod';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

const API_URL = environment.API_URL + '/api/test';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + sessionStorage.getItem('auth-token'),
  }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_URL = environment.API_URL + '/api/user';

  updateUser(user: any): Observable<any> {
    const url = `${this.API_URL + '/update'}/${user.userId}`;

    console.log('header : ' + JSON.stringify(httpOptions));
    const data = JSON.stringify(user);
    console.log('update data : ' + data);
    return this.http
      .put(`${this.API_URL + '/update'}/${user.userId}`, user);
  }
  constructor(private http: HttpClient) {
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }
}
