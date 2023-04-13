import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ProfileFacade } from '../store/profile.facade';
import { Observable, tap } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'profile-cover-photo',
  templateUrl: './profile-cover-photo.component.html',
  styleUrls: ['./profile-cover-photo.component.scss']
})
export class ProfileCoverPhotoComponent implements OnInit {

  coverPhoto$: Observable<SafeUrl | undefined>

  constructor(
    private readonly profileFacade: ProfileFacade
  ) { }

  ngOnInit(): void {
    this.coverPhoto$ = this.profileFacade.getCoverPhoto();
  }

  onCoverPhotoSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.item(0);

    if (file) {
      this.profileFacade.uploadCoverPhoto(file);
    }
  }

}
