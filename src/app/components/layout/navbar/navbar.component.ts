import { Component } from '@angular/core';
import { UserAuthenticationFacade } from '../../user-authentication/store/user-authentication.facade';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showSmallNavbar = false;

  constructor(
    private readonly userAuthenticationFacade: UserAuthenticationFacade
  ) { }

  toggleSmallNavbar(): void {
    this.showSmallNavbar = !this.showSmallNavbar;
  }

  logout(): void {
    this.userAuthenticationFacade.logoutUser();
  }
}
