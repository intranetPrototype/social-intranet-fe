import { Action, createReducer, on } from '@ngrx/store';
import { ProfileState } from './profile.state';
import { createEntityAdapter } from '@ngrx/entity';
import { Profile } from 'src/api/models';
import { ProfileApiActions } from './action';
import { ProfileApiConstants } from './const';


export const profileAdapter = createEntityAdapter<Profile>({
  selectId: (profile: Profile) => profile.userId
});

export const initialProfileState: ProfileState = profileAdapter.getInitialState({
  coverPhoto: undefined,
  profilePicture: undefined,
  error: undefined
});

export function ProfileReducer(state = initialProfileState, action: ProfileApiActions): ProfileState {
  switch (action.type) {
    case ProfileApiConstants.LOAD_PROFILE_SUCCESS:
      return profileAdapter.addOne(action.profile, { ...state, error: undefined });
    case ProfileApiConstants.LOAD_PROFILE_FAILURE:
      return profileAdapter.removeAll({ ...state, error: action.error });

    case ProfileApiConstants.UPDATE_PROFILE_SUCCESS:
      return profileAdapter.updateOne({ id: action.profile.userId, changes: { ...action.profile } }, state);
    case ProfileApiConstants.UPDATE_PROFILE_FAILURE:
      return { ...state, error: action.error };

    case ProfileApiConstants.LOAD_COVER_PHOTO_SUCCESS:
      return { ...state, coverPhoto: action.coverPhoto, error: undefined }
    case ProfileApiConstants.LOAD_COVER_PHOTO_FAILURE:
      return { ...state, coverPhoto: undefined, error: action.error };
    case ProfileApiConstants.LOAD_PROFILE_PICTURE_SUCCESS:
      return { ...state, profilePicture: action.profilePicture, error: undefined }
    case ProfileApiConstants.LOAD_PROFILE_PICTURE_FAILURE:
      return { ...state, profilePicture: undefined, error: action.error };

    case ProfileApiConstants.UPLOAD_COVER_PHOTO_SUCCESS:
      return profileAdapter.updateOne({ id: action.profile.userId, changes: { coverPhoto: action.profile.coverPhoto } }, state)
    case ProfileApiConstants.UPLOAD_COVER_PHOTO_FAILURE:
      return { ...state, error: action.error };
    case ProfileApiConstants.UPLOAD_PROFILE_PICTURE_SUCCESS:
      return profileAdapter.updateOne({ id: action.profile.userId, changes: { profilePicture: action.profile.profilePicture } }, state);
    case ProfileApiConstants.UPLOAD_COVER_PHOTO_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
}

