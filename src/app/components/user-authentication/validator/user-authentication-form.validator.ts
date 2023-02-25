import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationFormValidator {

  constructor() { }

  public static sameEmailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email')?.value;
    const emailRepeat = control.get('emailRepeat')?.value;

    if (!email || !emailRepeat) {
      return null;
    }

    if (email !== emailRepeat) {
      return { invalidEmailRepeat: true };
    }

    return null;
  }

  public static samePasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const passwordRepeat = control.get('passwordRepeat')?.value;

    if (!password || !passwordRepeat) {
      return null;
    }

    if (password !== passwordRepeat) {
      return { invalidPasswordRepeat: true };
    }

    return null;
  }

}