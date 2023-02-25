import { User } from 'src/api/models';
import { EntityState } from '@ngrx/entity';
import { HttpErrorResponse } from '@angular/common/http';

export interface UserAuthenticationState extends EntityState<User> {
  error?: HttpErrorResponse;
}

// export interface UserAuthenticationState { }