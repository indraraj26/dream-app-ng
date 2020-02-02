import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-structural-directives",
  templateUrl: "./structural-directives.component.html",
  styleUrls: ["./structural-directives.component.scss"]
})
export class StructuralDirectivesComponent implements OnInit {
  public name: string = "chands";

  public heroes: any = [
    {
      id: 1,
      name: "chandu",
      img:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/biblical-baby-names-1559310903.jpg"
    },
    {
      id: 2,
      name: "indra"
    }
  ];
  constructor() {}

  ngOnInit() {
    this.heroes.forEach(element => {
      console.log(element.name);
    });
  }
}
