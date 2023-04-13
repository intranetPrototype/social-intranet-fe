/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface Profile {
  birthDate: string;

  /**
   * City
   */
  city: string;

  /**
   * Path to cover-photo
   */
  coverPhoto: string;

  /**
   * Description
   */
  description: string;

  /**
   * PostCode
   */
  postCode: string;

  /**
   * Path to profile-picture
   */
  profilePicture: string;

  /**
   * Street
   */
  street: string;

  /**
   * User
   */
  user: User;

  /**
   * UserId
   */
  userId: number;
}
