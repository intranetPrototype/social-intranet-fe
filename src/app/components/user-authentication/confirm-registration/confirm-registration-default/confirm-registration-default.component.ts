import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResendConfirmRegistrationForm } from '../model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-confirm-registration-default',
  templateUrl: './confirm-registration-default.component.html',
  styleUrls: ['./confirm-registration-default.component.scss']
})
export class ConfirmRegistrationDefaultComponent {

  @Input() error: HttpErrorResponse | undefined;
  @Input() resendConfirmRegistrationControl: FormControl<string>;
  @Input() resendConfirmRegistrationForm: FormGroup<ResendConfirmRegistrationForm>;

  @Output() resendConfirmRegistrationEmit = new EventEmitter<void>();

  hideResendHint: boolean = true;

  resendConfirmRegistration(): void {
    this.hideResendHint = !this.hideResendHint;
    
    this.resendConfirmRegistrationEmit.emit();
  }
}
