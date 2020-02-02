import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-terminal",
  templateUrl: "./form-terminal.component.html",
  styleUrls: ["./form-terminal.component.scss"]
})
export class FormTerminalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(name, age) {
    console.log(name, age, "Name and age");
  }
}
