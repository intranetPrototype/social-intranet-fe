import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';

@Component({
  selector: 'profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {

  constructor(
    private readonly matDialog: MatDialog
  ) { }

  openEditProfileDialog(): void {
    this.matDialog.open(EditProfileDialogComponent);
  }

}
