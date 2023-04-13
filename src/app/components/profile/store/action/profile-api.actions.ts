import { Profile } from "src/api/models";
import { ProfileApiConstants } from "../const";
import { Action } from "@ngrx/store";
import { HttpErrorResponse } from "@angular/common/http";


export type ProfileApiActions = LoadProfileSuccess | LoadProfileFailure
  | UpdateProfileSuccess | UpdateProfileFailure
  | LoadCoverPhotoSuccess | LoadCoverPhotoFailure
  | LoadProfilePictureSuccess | LoadProfilePictureFailure
  | UploadCoverPhotoSuccess | UploadCoverPhotoFailure
  | UploadProfilePictureSuccess | UploadProfilePictureFailure;

export class LoadProfileSuccess implements Action {
  readonly type = ProfileApiConstants.LOAD_PROFILE_SUCCESS;
  constructor(readonly profile: Profile) { }
}
export class LoadProfileFailure implements Action {
  readonly type = ProfileApiConstants.LOAD_PROFILE_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class UpdateProfileSuccess implements Action {
  readonly type = ProfileApiConstants.UPDATE_PROFILE_SUCCESS;
  constructor(readonly profile: Profile) { }
}
export class UpdateProfileFailure implements Action {
  readonly type = ProfileApiConstants.UPDATE_PROFILE_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class LoadCoverPhotoSuccess implements Action {
  readonly type = ProfileApiConstants.LOAD_COVER_PHOTO_SUCCESS;
  constructor(readonly coverPhoto: Blob) { }
}
export class LoadCoverPhotoFailure implements Action {
  readonly type = ProfileApiConstants.LOAD_COVER_PHOTO_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}
export class LoadProfilePictureSuccess implements Action {
  readonly type = ProfileApiConstants.LOAD_PROFILE_PICTURE_SUCCESS;
  constructor(readonly profilePicture: Blob) { }
}
export class LoadProfilePictureFailure implements Action {
  readonly type = ProfileApiConstants.LOAD_PROFILE_PICTURE_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}

export class UploadCoverPhotoSuccess implements Action {
  readonly type = ProfileApiConstants.UPLOAD_COVER_PHOTO_SUCCESS;
  constructor(readonly profile: Profile) { }
}
export class UploadCoverPhotoFailure implements Action {
  readonly type = ProfileApiConstants.UPLOAD_COVER_PHOTO_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}
export class UploadProfilePictureSuccess implements Action {
  readonly type = ProfileApiConstants.UPLOAD_PROFILE_PICTURE_SUCCESS;
  constructor(readonly profile: Profile) { }
}
export class UploadProfilePictureFailure implements Action {
  readonly type = ProfileApiConstants.UPLOAD_PROFILE_PICTURE_FAILURE;
  constructor(readonly error: HttpErrorResponse) { }
}
