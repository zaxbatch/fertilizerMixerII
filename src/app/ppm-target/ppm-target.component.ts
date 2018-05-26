import { Component, OnInit } from '@angular/core';
import { PpmTarget } from '../ppm-target'

@Component({
  selector: 'app-ppm-target',
  templateUrl: './ppm-target.component.html',
  styleUrls: ['./ppm-target.component.css']
})
export class PpmTargetComponent implements OnInit {
  //ppmTarget: PpmTarget[];
  gallons = 0;

  ppm = {
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
    calcium: 0,
    magnesium: 0,
    sulfur: 0,
    iron: 0
}

  constructor() { }

  ngOnInit() {
  }

}
