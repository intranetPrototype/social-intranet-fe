import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FileServerService, ProfileService } from 'src/api/services';
import { ProfilePageConstants } from './const';
import { switchMap, map, catchError, of } from 'rxjs';
import { LoadCoverPhotoFailure, LoadCoverPhotoSuccess, LoadProfileFailure, LoadProfilePictureFailure, LoadProfilePictureSuccess, LoadProfileSuccess, UpdateProfile, UpdateProfileFailure, UpdateProfileSuccess, UploadCoverPhoto, UploadCoverPhotoFailure, UploadCoverPhotoSuccess, UploadProfilePicture, UploadProfilePictureFailure, UploadProfilePictureSuccess } from './action';
import { ProfileFacade } from './profile.facade';

@Injectable()
export class ProfileEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly profileFacade: ProfileFacade,
    private readonly profileService: ProfileService,
    private readonly fileServerService: FileServerService
  ) { }

  loadProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfilePageConstants.LOAD_PROFILE),
      switchMap(() => {
        return this.profileService.getUserProfile().pipe(
          map(profile => {

            if (profile?.coverPhoto) {
              this.profileFacade.loadCoverPhoto();
            }

            if (profile?.profilePicture) {
              this.profileFacade.loadProfilePicture();
            }

            return new LoadProfileSuccess(profile);
          }),
          catchError(error => of(new LoadProfileFailure(error)))
        )
      })
    );
  });

  updateProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfilePageConstants.UPDATE_PROFILE),
      switchMap((updateProfileRequest: UpdateProfile) => {
        return this.profileService.updateProfile({ body: updateProfileRequest.updateProfile }).pipe(
          map(profile => new UpdateProfileSuccess(profile)),
          catchError(error => of(new UpdateProfileFailure(error)))
        )
      })
    );
  });


  loadCoverPhoto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfilePageConstants.LOAD_COVER_PHOTO),
      switchMap(() => {
        return this.fileServerService.getFileFromFileServer({ fileName: 'cover-photo.jpg' }).pipe(
          map(coverPhoto => new LoadCoverPhotoSuccess(coverPhoto)),
          catchError(error => of(new LoadCoverPhotoFailure(error)))
        )
      })
    );
  });
  loadProfilePicture$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfilePageConstants.LOAD_PROFILE_PICTURE),
      switchMap(() => {
        return this.fileServerService.getFileFromFileServer({ fileName: 'profile-picture.jpg' }).pipe(
          map(profilePicture => new LoadProfilePictureSuccess(profilePicture)),
          catchError(error => of(new LoadProfilePictureFailure(error)))
        )
      })
    );
  });

  uploadCoverPhoto$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfilePageConstants.UPLOAD_COVER_PHOTO),
      switchMap((uploadCoverPhotoRequest: UploadCoverPhoto) => {
        return this.profileService.uploadCoverPhoto({ body: { file: uploadCoverPhotoRequest.coverPhoto } }).pipe(
          map(profile => {
            this.profileFacade.loadCoverPhoto();

            return new UploadCoverPhotoSuccess(profile);
          }),
          catchError(error => of(new UploadCoverPhotoFailure(error)))
        )
      })
    );
  });
  uploadProfilePicture$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfilePageConstants.UPLOAD_PROFILE_PICTURE),
      switchMap((uploadProfilePictureRequest: UploadProfilePicture) => {
        return this.profileService.uploadProfilePicture({ body: { file: uploadProfilePictureRequest.profilePicture } }).pipe(
          map(profile => {
            this.profileFacade.loadProfilePicture();

            return new UploadProfilePictureSuccess(profile);
          }),
          catchError(error => of(new UploadProfilePictureFailure(error)))
        )
      })
    );
  });
}
