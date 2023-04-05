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

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarSearchComponent
  ],
  imports: [
    CoreModule,
    RouterModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule { }
