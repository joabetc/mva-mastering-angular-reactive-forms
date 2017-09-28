import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray, FormBuilder } from "@angular/forms";

@Component({
    selector: "main",
    template: `<form [formGroup]="profileForm">
        <h1>Profile Form</h1>
        <div>
            <label for="first-name-input">First Name:</label>
            <input type="text" id="first-name-input" formControlName="firstNameInput">
        </div>
        <div>
            <label for="last-name-input">Last Name:</label>
            <input type="text" id="last-name-input" formControlName="lastNameInput">
        </div>
        <div formArrayName="addressGroups">
            <div *ngFor="let addressGroup of profileForm.controls['addressGroups'].controls" [formGroup]="addressGroup">
                <h2>Address</h2>
                <div>
                    <label for="street-input">Street:</label>
                    <input type="text" id="street-input" formControlName="streetInput">
                </div>
                <div>
                    <label for="city-input">City:</label>
                    <input type="text" id="city-input" formControlName="cityInput">
                </div>
                <div>
                    <label for="state-input">State:</label>
                    <input type="text" id="state-input" formControlName="stateInput">
                </div>
                <div>
                    <label for="zip-code-input">Zip Code:</label>
                    <input type="text" id="zip-code-input" formControlName="zipCodeInput">
                </div>
            </div>
        </div>
        <button type="button" (click)="addAddressGroup()">Add Address</button>

        <div>
            <button type="button" (click)="saveProfileForm()">Save Profile</button>
        </div>
    </form>
    `,
})
export class AppComponent {

    public profileForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.profileForm = this.fb.group({
            firstNameInput: [""],
            lastNameInput: [""],
            addressGroups: this.fb.array([
                this.fb.group({
                    streetInput: [""],
                    cityInput: [""],
                    stateInput: [""],
                    zipCodeInput: [""],
                }),
            ]),
        });
    }
    
    public addAddressGroup() {
        const fa = this.profileForm.controls["addressGroups"] as FormArray;
        
        fa.push(this.newAddressGroup());
    }

    public saveProfileForm() {
        console.log(this.profileForm.value);
    }
    
    private newAddressGroup() {
        return new FormGroup({
            streetInput: new FormControl(""),
            cityInput: new FormControl(""),
            stateInput: new FormControl(""),
            zipCodeInput: new FormControl(""),
        })
    }
}
