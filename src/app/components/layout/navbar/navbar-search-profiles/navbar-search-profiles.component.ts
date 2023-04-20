import { Component, Input } from '@angular/core';
import { Profile } from 'src/api/models';

@Component({
  selector: 'navbar-search-profiles',
  templateUrl: './navbar-search-profiles.component.html',
  styleUrls: ['./navbar-search-profiles.component.scss']
})
export class NavbarSearchProfilesComponent {

  @Input() searchProfile: Profile;

}
