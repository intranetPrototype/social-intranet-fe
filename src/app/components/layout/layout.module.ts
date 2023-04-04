import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NavbarSearchComponent } from './navbar/navbar-search/navbar-search.component';
import { CoreModule } from 'src/app/core/core.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarSearchComponent
  ],
  imports: [
    FlexLayoutModule,
    CoreModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule { }
