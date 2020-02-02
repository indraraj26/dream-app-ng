import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name: string = "chandan";
  url: string;
  
  constructor() {
    console.log("Constructor ran");
  }

  ngOnInit() {
    setTimeout(() => {
      this.url =
        "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg";
    }, 5000);
  }

  letsMakeYouRocks() {
    return this.name + " You rocks";
  }

  onNameChange(abc: string) {
    this.name = abc;
    console.log("You clicked change name");
  }

  onEnterButton() {
    console.log("you entered on button");
  }

  onChangeText(event: any) {
    console.log(event.target.value);
  }
}
