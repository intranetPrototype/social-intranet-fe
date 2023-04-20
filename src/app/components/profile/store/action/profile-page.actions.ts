import { Action } from '@ngrx/store';
import { ProfilePageConstants } from '../const';
import { UpdateProfileRequest } from 'src/api/models';

export class LoadProfile implements Action {
  readonly type = ProfilePageConstants.LOAD_PROFILE;
  constructor() { }
}
export class SearchProfileByFullName implements Action {
  readonly type = ProfilePageConstants.SEARCH_PROFILE_BY_FULLNAME;
  constructor(readonly fullName: string) { }
}

export class UpdateProfile implements Action {
  readonly type = ProfilePageConstants.UPDATE_PROFILE;
  constructor(readonly updateProfile: UpdateProfileRequest) { }
}

export class LoadCoverPhoto implements Action {
  readonly type = ProfilePageConstants.LOAD_COVER_PHOTO;
  constructor() { }
}
export class LoadProfilePicture implements Action {
  readonly type = ProfilePageConstants.LOAD_PROFILE_PICTURE;
  constructor() { }
}

export class UploadCoverPhoto implements Action {
  readonly type = ProfilePageConstants.UPLOAD_COVER_PHOTO;
  constructor(readonly coverPhoto: File) { }
}
export class UploadProfilePicture implements Action {
  readonly type = ProfilePageConstants.UPLOAD_PROFILE_PICTURE;
  constructor(readonly profilePicture: File) { }
}