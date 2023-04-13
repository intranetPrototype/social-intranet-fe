/* tslint:disable */
/* eslint-disable */
import { UpdateProfileDto } from './update-profile-dto';
import { UpdateProfileUserDto } from './update-profile-user-dto';
export interface UpdateProfileRequest {

  /**
   * Profile
   */
  profile: UpdateProfileDto;

  /**
   * User
   */
  user: UpdateProfileUserDto;
}
