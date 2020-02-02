import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-driven-forms",
  templateUrl: "./template-driven-forms.component.html",
  styleUrls: ["./template-driven-forms.component.scss"]
})
export class TemplateDrivenFormsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(form) {
    console.log(form, "whole form");
    console.log(form.value, form.valid);
  }
}
