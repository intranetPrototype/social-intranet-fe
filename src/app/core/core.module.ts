import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInDirective } from './directives/logged-in.directive';



@NgModule({
  declarations: [
    LoggedInDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoggedInDirective
  ]
})
export class CoreModule { }
