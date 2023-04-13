import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';
import { ProfileFacade } from '../store/profile.facade';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';
import { Profile } from 'src/api/models';

@Component({
  selector: 'profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {

  @Input() profile: Profile | undefined;

  profilePicture$: Observable<SafeUrl | undefined>;

  constructor(
    private readonly matDialog: MatDialog,
    private readonly profileFacade: ProfileFacade
  ) { }

  ngOnInit(): void {
    this.profilePicture$ = this.profileFacade.getProfilePicture();
  }

  openEditProfileDialog(): void {
    this.matDialog.open(EditProfileDialogComponent, { data: { ...this.profile } });
  }

  onProfilePictureSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target?.files?.item(0);

    if (file) {
      this.profileFacade.uploadProfilePicture(file);
    }
  }

}
