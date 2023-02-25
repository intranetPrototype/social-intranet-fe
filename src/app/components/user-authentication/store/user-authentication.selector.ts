import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserAuthenticationState } from "./user-authentication.state";

const userAuthenticationState = createFeatureSelector<UserAuthenticationState>('user-authentication');

export const getUserAuthenticationUser = createSelector(
  userAuthenticationState,
  state => state?.ids.map(id => state.entities[id])[0]         // TODO: Schoenere Loesung
);

export const getUserAuthenticationError = createSelector(
  userAuthenticationState,
  state => state.error
);