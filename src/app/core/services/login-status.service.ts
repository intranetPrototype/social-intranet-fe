import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  private isUserLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  setIsUserLoggedIn(isUserLoggedIn: boolean): void {
    this.isUserLoggedIn$.next(isUserLoggedIn);
  }

  getIsUserLoggedIn(): Observable<boolean> {
    return this.isUserLoggedIn$;
  }
}
