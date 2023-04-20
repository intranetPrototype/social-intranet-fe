import { Component, OnInit } from '@angular/core';
import { UserAuthenticationFacade } from '../../user-authentication/store/user-authentication.facade';
import { ProfileFacade } from '../../profile/store/profile.facade';
import { Observable, of, tap } from 'rxjs';
import { Profile } from 'src/api/models';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showSmallNavbar = false;

  searchProfiles$: Observable<Profile[]>;

  constructor(
    private readonly profileFacade: ProfileFacade,
    private readonly userAuthenticationFacade: UserAuthenticationFacade
  ) { }

  ngOnInit(): void {
    this.searchProfiles$ = this.profileFacade.getSearchProfiles().pipe(
      tap(searchProfiles => console.log(searchProfiles))
    );
  }

  toggleSmallNavbar(): void {
    this.showSmallNavbar = !this.showSmallNavbar;
  }

  searchProfiles(fullName: string): void {
    this.profileFacade.searchProfileByFullName(fullName);
  }

  logout(): void {
    this.userAuthenticationFacade.logoutUser();
  }
}
