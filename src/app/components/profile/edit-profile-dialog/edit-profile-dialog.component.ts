import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss']
})
export class EditProfileDialogComponent {

  constructor(
    private readonly dateAdapter: DateAdapter<Date>,
    private readonly matDialogRef: MatDialogRef<EditProfileDialogComponent>
  ) {
    this.dateAdapter.setLocale('de');
  }

  closeEditProfileDialog(): void {
    this.matDialogRef.close();
  }

}
