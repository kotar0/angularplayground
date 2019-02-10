import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>('/assets/json/user-data.json');
  }
}
