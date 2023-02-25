import { FormControl } from "@angular/forms";

export interface ResetPasswordForm {
  password: FormControl<string>;
  passwordRepeat: FormControl<string>;
}