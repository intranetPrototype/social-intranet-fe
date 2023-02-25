import { Component } from '@angular/core';
import { UserAuthenticationFacade } from '../user-authentication/store/user-authentication.facade';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private readonly userAuthenticationFacade: UserAuthenticationFacade) { }

  logout(): void {
    this.userAuthenticationFacade.logoutUser();
  }

}
