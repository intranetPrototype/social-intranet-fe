import { FormControl } from "@angular/forms";

export interface EditProfileDialogUserForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}