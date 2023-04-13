import { Component, OnInit } from '@angular/core';
import { ProfileFacade } from './store/profile.facade';
import { Observable } from 'rxjs';
import { Profile } from 'src/api/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile$: Observable<Profile | undefined>

  constructor(private readonly profileFacade: ProfileFacade) { }

  ngOnInit(): void {
    this.profileFacade.loadProfile();

    this.profile$ = this.profileFacade.getProfile();
  }

}
