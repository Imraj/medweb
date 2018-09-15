import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admininsulin',
  templateUrl: './admininsulin.component.html',
  styleUrls: ['./admininsulin.component.css']
})
export class AdmininsulinComponent implements OnInit {

  insulin = {
    name: "",
    brand: "",
    type: "",
    ml: ""
  }

  constructor() { }

  ngOnInit() {
  }

}
