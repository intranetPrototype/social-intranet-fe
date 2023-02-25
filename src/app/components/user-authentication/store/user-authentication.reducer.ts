import { UserAuthenticationApiConstants } from './const';
import { createEntityAdapter } from '@ngrx/entity';
import { Tokens, User } from 'src/api/models';
import { LogoutUser, UserAuthenticationApiActions } from './action';
import { UserAuthenticationState } from './user-authentication.state';

export const userAuthenticationAdapter = createEntityAdapter<User>({
  selectId: (user: User) => user.id
});


export const initialUserAuthenticationState: UserAuthenticationState = userAuthenticationAdapter.getInitialState({
  error: undefined
})

export function UserAuthenticationReducer(state = initialUserAuthenticationState, action: UserAuthenticationApiActions): UserAuthenticationState {
  switch (action.type) {
    case UserAuthenticationApiConstants.SIGNUP_USER_SUCCESS:
      return { ...state, error: undefined };
    case UserAuthenticationApiConstants.SIGNUP_USER_FAILURE:
      return userAuthenticationAdapter.removeAll({ ...state, error: action.error });

    case UserAuthenticationApiConstants.SIGNIN_USER_SUCCESS:
      return userAuthenticationAdapter.addOne(action.user, { ...state, error: undefined });
    case UserAuthenticationApiConstants.SIGNIN_USER_FAILURE:
      return userAuthenticationAdapter.removeAll({ ...state, error: action.error });

    case UserAuthenticationApiConstants.CONFIRM_REGISTRATION_SUCCESS:
      return userAuthenticationAdapter.updateOne(action.user, state);
    case UserAuthenticationApiConstants.CONFIRM_REGISTRATION_FAILURE:
      return { ...state, error: action.error };

    case UserAuthenticationApiConstants.RESEND_CONFIRM_REGISTRATION_SUCCESS:
      return { ...state, error: undefined };
    case UserAuthenticationApiConstants.RESEND_CONFIRM_REGISTRATION_FAILURE:
      return { ...state, error: action.error };

    case UserAuthenticationApiConstants.GET_USER_BY_TOKEN_SUCCESS:
      return userAuthenticationAdapter.addOne(action.user, { ...state, error: undefined });
    case UserAuthenticationApiConstants.GET_USER_BY_TOKEN_FAILURE:
      return { ...state, error: action.error };

    case UserAuthenticationApiConstants.LOGOUT_USER_SUCCESS:
      return userAuthenticationAdapter.removeAll({ ...state, error: undefined });
    case UserAuthenticationApiConstants.LOGOUT_USER_FAILURE:
      return { ...state, error: action.error };

    case UserAuthenticationApiConstants.SEND_RESET_USER_PASSWORD_MAIL_SUCCESS:
      return state;
    case UserAuthenticationApiConstants.SEND_RESET_USER_PASSWORD_MAIL_FAILURE:
      return { ...state, error: action.error };

    case UserAuthenticationApiConstants.UPDATE_USER_PASSWORD_SUCCESS:
      return state;
    case UserAuthenticationApiConstants.UPDATE_USER_PASSWORD_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
