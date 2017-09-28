import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: "main",
    template: `<form [formGroup]="profileForm">
        <h1>Profile Form</h1>
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
        <div formGroupName="addressGroup">
            <h2>Address</h2>
            <div>
                <label for="street-input">Street:</label>
                <input type="text" id="street-input" formControlName="streetInput">
                <br>Value: {{profileForm.controls['addressGroup'].controls['streetInput'].value}}
            </div>
            <div>
                <label for="city-input">City:</label>
                <input type="text" id="city-input" formControlName="cityInput">
                <br>Value: {{profileForm.controls['addressGroup'].controls['cityInput'].value}}
            </div>
            <div>
                <label for="state-input">State:</label>
                <input type="text" id="state-input" formControlName="stateInput">
                <br>Value: {{profileForm.controls['addressGroup'].controls['stateInput'].value}}
            </div>
            <div>
                <label for="zip-code-input">Zip Code:</label>
                <input type="text" id="zip-code-input" formControlName="zipCodeInput">
                <br>Value: {{profileForm.controls['addressGroup'].controls['zipCodeInput'].value}}
            </div>
        </div>
    </form>
    `,
})
export class AppComponent {

    public profileForm: FormGroup = new FormGroup({
        firstNameInput: new FormControl(""),
        lastNameInput: new FormControl(""),
        addressGroup: new FormGroup({
            streetInput: new FormControl(""),
            cityInput: new FormControl(""),
            stateInput: new FormControl(""),
            zipCodeInput: new FormControl(""),
        }),
    });

    public message: string = "Hello World!";

}
