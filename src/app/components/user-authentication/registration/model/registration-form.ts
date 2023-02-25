import { FormControl } from "@angular/forms";

export interface RegistrationForm {
  email: FormControl<string>;
  emailRepeat: FormControl<string>;
  password: FormControl<string>;
  passwordRepeat: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}