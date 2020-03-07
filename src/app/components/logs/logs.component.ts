import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.css"]
})
export class LogsComponent implements OnInit {
  logs: {
    id: string;
    text: string;
    date: any;
  }[];

  constructor() {}

  ngOnInit() {
    this.logs = [
      { id: "1", text: "Generated components", date: new Date("12/26/2019") },
      { id: "2", text: "Added Bootstrap", date: new Date("12/27/2019") },
      { id: "3", text: "Added logs component", date: new Date("12/28/2019") }
    ];
  }
}
