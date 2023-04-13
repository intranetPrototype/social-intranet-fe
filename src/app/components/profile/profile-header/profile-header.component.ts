import { Component, Input } from '@angular/core';
import { Profile } from 'src/api/models';

@Component({
  selector: 'profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent {

  @Input() profile: Profile | undefined;

}
