import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NavbarSearchComponent } from './navbar/navbar-search/navbar-search.component';
import { CoreModule } from 'src/app/core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProfileReducer } from '../profile/store/profile.reducer';
import { ProfileEffects } from '../profile/store/profile.effects';
import { NavbarSearchProfilesComponent } from './navbar/navbar-search-profiles/navbar-search-profiles.component';
import { LetModule } from '@ngrx/component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarSearchComponent,
    NavbarSearchProfilesComponent
  ],
  imports: [
    LetModule,
    CoreModule,
    FormsModule,
    RouterModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule,

    EffectsModule.forFeature([ProfileEffects]),
    StoreModule.forFeature('profile', ProfileReducer)
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule { }
