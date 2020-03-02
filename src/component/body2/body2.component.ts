import { Component, OnInit } from "@angular/core";
import { fakeNew } from "../../app/Fake-new";

@Component({
  selector: "app-body2",
  templateUrl: "./body2.component.html",
  styleUrls: ["./body2.component.scss"]
})
export class Body2Component implements OnInit {
  news = fakeNew;
  constructor() {}

  ngOnInit(): void {}
}
