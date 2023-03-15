import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginStatusService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly loginStatusService: LoginStatusService
  ) { }

  canActivate(): boolean {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');

    if (!accessToken || !refreshToken) {
      this.loginStatusService.setIsUserLoggedIn(false);
      this.router.navigate(['/login']);

      return false;
    }

    this.loginStatusService.setIsUserLoggedIn(true);

    return true;
  }

}
