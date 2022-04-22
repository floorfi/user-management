import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  obs = new Observable((observer) => {
    console.log("Observable starts")
    observer.next("1")
    observer.next("2")
    observer.next("3")
    observer.next("4")
    observer.next("5")
  })

  currentUser: BehaviorSubject<any> = new BehaviorSubject('');

  constructor() { }

  storeCurrentUser(value: any) {
    this.currentUser.next(value);
  }
}
