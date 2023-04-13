import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.state';
import { Profile } from 'src/api/models';

const profileState = createFeatureSelector<ProfileState>('profile');

export const getProfile = createSelector(
  profileState,
  state => state?.ids.map(id => state.entities[id])[0]
);

export const getCoverPhoto = createSelector(
  profileState,
  state => state.coverPhoto
);
export const getProfilePicture = createSelector(
  profileState,
  state => state.profilePicture
);

export const getProfileError = createSelector(
  profileState,
  state => state.error
);