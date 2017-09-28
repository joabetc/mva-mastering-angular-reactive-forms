import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "main",
    template: `<form [formGroup]="profileForm">
        <div>
            <label for="first-name-input">First Name:</label>
            <input type="text" id="first-name-input" formControlName="firstNameInput">
            <br>Value: {{profileForm.controls['firstNameInput'].value}}
        </div>
        <div>
            <label for="last-name-input">Last Name:</label>
            <input type="text" id="last-name-input" formControlName="lastNameInput">
            <br>Value: {{profileForm.controls['lastNameInput'].value}}
        </div>
    </form>
    `,
})
export class AppComponent {

    public profileForm: FormGroup = new FormGroup({
        firstNameInput: new FormControl(""),
        lastNameInput: new FormControl(""),
    });

    public message: string = "Hello World!";

}
