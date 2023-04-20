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
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';
import { StoreModule } from '@ngrx/store';
import { ProfileReducer } from './store/profile.reducer';
import { LetModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileDescriptionComponent } from './profile-description/profile-description.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { ProfileNewsComponent } from './profile-news/profile-news.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCoverPhotoComponent,
    ProfileHeaderComponent,
    ProfilePictureComponent,
    EditProfileDialogComponent,
    ProfileDescriptionComponent,
    ProfileFollowerComponent,
    ProfileNewsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,

    LetModule
  ]
})
export class ProfileModule { }
