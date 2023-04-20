import { HttpErrorResponse } from "@angular/common/http";
import { EntityState } from "@ngrx/entity";
import { Profile } from "src/api/models";

export interface ProfileState extends EntityState<Profile> {
  searchProfiles: Profile[],
  coverPhoto?: Blob,
  profilePicture?: Blob,
  error?: HttpErrorResponse
}