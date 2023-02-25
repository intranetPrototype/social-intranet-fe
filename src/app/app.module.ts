import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from 'src/api/api.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { MainComponent } from './components/main/main.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { EmailTokenInterceptor } from './core/interceptors/email-token.interceptor';
import { RefreshTokenInterceptor } from './core/interceptors/refresh-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    ApiModule.forRoot({ rootUrl: environment.baseApiUrl }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    EffectsModule.forRoot([],),
    StoreModule.forRoot({}, { metaReducers: [storeFreeze] }),
    StoreDevtoolsModule.instrument({
      name: 'SocialIntranet ngrx dev-tools',
      maxAge: 25
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: EmailTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
