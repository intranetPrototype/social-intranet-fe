import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserAuthenticationFacade } from '../../components/user-authentication/store/user-authentication.facade';

@Injectable({
  providedIn: 'root'
})
export class UserConfirmedGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly userAuthenticationFacade: UserAuthenticationFacade
  ) { }

  canActivate(): Observable<boolean> {
    return this.userAuthenticationFacade.user.pipe(
      map(user => {
        if (user !== null && user?.confirmed) {
          return true;
        }

        if (user?.email && !user?.confirmed) {
          this.router.navigate(['/confirm-registration'], { queryParams: { redirected: true }});

          return false;
        }

        this.router.navigate(['/login']);

        return false;
      })
    );
  }
  
}
