import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-forms",
  templateUrl: "./reactive-forms.component.html",
  styleUrls: ["./reactive-forms.component.scss"]
})
export class ReactiveFormsComponent implements OnInit {
  public myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.myForm, "whole form");
    console.log(this.myForm.value, this.myForm.valid);
    this.myForm.reset();
  }
}
