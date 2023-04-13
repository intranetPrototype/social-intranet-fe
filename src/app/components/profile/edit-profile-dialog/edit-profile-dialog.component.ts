import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditProfileDialogForm, EditProfileDialogProfileForm, EditProfileDialogUserForm } from '../model';
import { Profile, UpdateProfileRequest } from 'src/api/models';
import { ProfileFacade } from '../store/profile.facade';

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss']
})
export class EditProfileDialogComponent implements OnInit {

  editProfileFormGroup: FormGroup<EditProfileDialogForm>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly profileFacade: ProfileFacade,
    private readonly dateAdapter: DateAdapter<Date>,
    @Inject(MAT_DIALOG_DATA) private readonly profile: Profile,
    private readonly matDialogRef: MatDialogRef<EditProfileDialogComponent>
  ) {
    this.dateAdapter.setLocale('de');
  }

  ngOnInit(): void {
    this.editProfileFormGroup = this.formBuilder.group<EditProfileDialogForm>({
      user: this.formBuilder.group<EditProfileDialogUserForm>({
        firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] })
      }),
      profile: this.formBuilder.group<EditProfileDialogProfileForm>({
        birthDate: new FormControl('', { nonNullable: true }),
        description: new FormControl('', { nonNullable: true }),
        city: new FormControl('', { nonNullable: true }),
        postCode: new FormControl('', { nonNullable: true }),
        street: new FormControl('', { nonNullable: true })
      })
    });

    this.editProfileFormGroup.controls.user.patchValue(this.profile.user);
    this.editProfileFormGroup.controls.profile.patchValue(this.profile);
  }

  closeEditProfileDialog(): void {
    this.matDialogRef.close();
  }

  updateProfile(): void {
    this.profileFacade.updateProfile(this.editProfileFormGroup.value as UpdateProfileRequest);

    this.closeEditProfileDialog();
  }

}
