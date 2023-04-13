import { Component, Input } from '@angular/core';
import { Profile } from 'src/api/models';

@Component({
  selector: 'profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.scss']
})
export class ProfileDescriptionComponent {

  @Input() profile: Profile | undefined;

}
