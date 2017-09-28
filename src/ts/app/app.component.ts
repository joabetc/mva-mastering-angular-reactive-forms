import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "main",
    template: `
        <div>
            <label for="first-name-input">First Name:</label>
            <input type="text" id="first-name-input" [formControl]="firstNameInput">
            <br>Value: {{firstNameInput.value}}
        </div>
        <div>
            <label for="last-name-input">Last Name:</label>
            <input type="text" id="last-name-input" [formControl]="lastNameInput">
            <br>Value: {{lastNameInput.value}}
        </div>
    `,
})
export class AppComponent {

    public firstNameInput:  FormControl = new FormControl("");
    public lastNameInput: FormControl = new  FormControl("");

    public message: string = "Hello World!";

}
