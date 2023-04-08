import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileCoverPhotoComponent } from './profile-cover-photo/profile-cover-photo.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { MatIconModule } from '@angular/material/icon';
import { EditProfileDialogComponent } from './edit-profile-dialog/edit-profile-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCoverPhotoComponent,
    ProfileHeaderComponent,
    ProfilePictureComponent,
    EditProfileDialogComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ProfileModule { }
