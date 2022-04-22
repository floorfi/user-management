import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {

  private cache$?: Observable<Array<User>>;

  constructor(private httpClient: HttpClient) { }

  userUrl: string = environment.apiURL + 'users'

  getUsers(): Observable<User[]> {
    var response = this.httpClient.get<User[]>(this.userUrl);
    return response;
  }

  getUserById(id: Number): Observable<User> {
    var response = this.httpClient.get<User>(this.userUrl + '/' + id);
    return response;
  }

  createUser(user: User): Observable<User> {
    var response = this.httpClient.post<User>(this.userUrl, user);
    return response;
  }

  updateUser(user: User): Observable<User> {
    var response = this.httpClient.put<User>(this.userUrl + '/' + user.id, user);
    return response;
  }

  deleteUser(user: User): Observable<User> {
    var response = this.httpClient.delete<User>(this.userUrl + '/' + user.id);
    return response;
  }
}
