import { FormGroup } from "@angular/forms";
import { EditProfileDialogUserForm } from "./edit-profile-dialog-user.form";
import { EditProfileDialogProfileForm } from "./edit-profile-dialog-profile.form";

export interface EditProfileDialogForm {
  user: FormGroup<EditProfileDialogUserForm>;
  profile: FormGroup<EditProfileDialogProfileForm>;
}