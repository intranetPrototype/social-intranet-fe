import { FormControl } from "@angular/forms";

export interface EditProfileDialogProfileForm {
  birthDate: FormControl<string>;
  description: FormControl<string>;
  city: FormControl<string>;
  postCode: FormControl<string>;
  street: FormControl<string>;
}