import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Profile, UpdateProfileRequest } from 'src/api/models';
import { AppState } from 'src/app/model';
import { Observable, map } from 'rxjs';
import { LoadCoverPhoto, LoadProfile, LoadProfilePicture, UpdateProfile, UploadCoverPhoto, UploadProfilePicture } from './action';
import { getCoverPhoto, getProfile, getProfilePicture } from './profile.selectors';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProfileFacade {

  constructor(
    private readonly store: Store<AppState>,
    private readonly sanitizer: DomSanitizer
  ) { }

  loadProfile(): void {
    this.store.dispatch(new LoadProfile());
  }

  loadCoverPhoto(): void {
    this.store.dispatch(new LoadCoverPhoto());
  }

  loadProfilePicture(): void {
    this.store.dispatch(new LoadProfilePicture());
  }

  getProfile(): Observable<Profile | undefined> {
    return this.store.select(getProfile);
  }

  getCoverPhoto(): Observable<SafeUrl | undefined> {
    return this.store.select(getCoverPhoto).pipe(
      map(coverPhoto => coverPhoto ? this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(coverPhoto)) : undefined)
    );
  }

  getProfilePicture(): Observable<SafeUrl | undefined> {
    return this.store.select(getProfilePicture).pipe(
      map(profilePicture => profilePicture ? this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(profilePicture)) : undefined)
    );
  }

  uploadCoverPhoto(coverPhoto: File): void {
    this.store.dispatch(new UploadCoverPhoto(coverPhoto));
  }

  uploadProfilePicture(profilePicture: File): void {
    this.store.dispatch(new UploadProfilePicture(profilePicture));
  }

  updateProfile(profile: UpdateProfileRequest): void {
    this.store.dispatch(new UpdateProfile(profile));
  }

}
