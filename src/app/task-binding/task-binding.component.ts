import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task-binding",
  templateUrl: "./task-binding.component.html",
  styleUrls: ["./task-binding.component.scss"]
})
export class TaskBindingComponent implements OnInit {
  url: any;
  name: string = "chands";
  src: any;
  constructor() {}

  ngOnInit() {
    this.url = "https://google.com";
    this.src =
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/biblical-baby-names-1559310903.jpg";
  }

  getHead() {
    if (this.name == "alexa") {
      this.name = "chands";
      this.src =
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/biblical-baby-names-1559310903.jpg";
      } else {
      this.name = "alexa";
      this.src =
        "https://d1u82yn7miridg.cloudfront.net/eyJidWNrZXQiOiJsYWJyb290cy1hc3NldHMiLCJrZXkiOiJfcHVibGljXC9fZmlsZXNcL3N5c3RlbVwvY2tcL3RyZW5kaW5nXC9iYWJ5LTExNTEzNTFfOTYwXzcyMF80OTA0MWExNGZlNWM3ZTgzNjU5NWQzMWNlMjQ0MjM4Ny5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjcwMCwiZml0IjoiY292ZXIifX19";
    }
  }

  changeImg() {
    if (
      this.src ==
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/biblical-baby-names-1559310903.jpg"
    ) {
      this.src =
        "https://d1u82yn7miridg.cloudfront.net/eyJidWNrZXQiOiJsYWJyb290cy1hc3NldHMiLCJrZXkiOiJfcHVibGljXC9fZmlsZXNcL3N5c3RlbVwvY2tcL3RyZW5kaW5nXC9iYWJ5LTExNTEzNTFfOTYwXzcyMF80OTA0MWExNGZlNWM3ZTgzNjU5NWQzMWNlMjQ0MjM4Ny5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjcwMCwiZml0IjoiY292ZXIifX19";
    } else {
      this.src =
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/biblical-baby-names-1559310903.jpg";
    }
  }
}
