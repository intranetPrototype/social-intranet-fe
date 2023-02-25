import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserAuthenticationRoutingModule } from './user-authentication-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UserAuthenticationEffects } from './store/user-authentication.effects';
import { UserAuthenticationFacade } from './store/user-authentication.facade';
import { StoreModule } from '@ngrx/store';
import { ConfirmRegistrationComponent } from './confirm-registration/confirm-registration.component';
import { UserAuthenticationReducer } from './store/user-authentication.reducer';
import { LetModule } from '@ngrx/component';
import { ConfirmRegistrationSuccessComponent } from './confirm-registration/confirm-registration-success/confirm-registration-success.component';
import { ConfirmRegistrationDefaultComponent } from './confirm-registration/confirm-registration-default/confirm-registration-default.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ConfirmRegistrationComponent,
    ConfirmRegistrationSuccessComponent,
    ConfirmRegistrationDefaultComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserAuthenticationRoutingModule,

    MatIconModule,
    MatInputModule,
    MatButtonModule,
    
    LetModule,
    EffectsModule.forFeature([UserAuthenticationEffects]),
    StoreModule.forFeature('user-authentication', UserAuthenticationReducer)
  ],
  providers: [
    UserAuthenticationFacade,
    UserAuthenticationEffects
  ]
})
export class UserAuthenticationModule { }
