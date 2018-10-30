import { Component, OnInit } from '@angular/core';
import {SimpleTime} from './simple-time';
import { StructureService } from '../structure.service';

@Component({
  selector: 'app-initial-input',
  templateUrl: './initial-input.component.html',
  styleUrls: ['./initial-input.component.scss']
})
export class InitialInputComponent implements OnInit {
  bpm: number = 0;
  timeScalar: number = 0;
  time: string = "00:00"
  bars: number = 0;
  barsCalculated = false;

  timeObject: SimpleTime = new SimpleTime();

  setBPM() {
    this.structure.setBPM(this.bpm);
  }

  scaleTime() {
    this.time = this.timeObject.scaleTime(this.timeScalar/10000000);
    this.structure.setTime(this.timeObject);
    return this.time;
  }

  calculateBars() {
    this.bars = this.structure.calculateBars();
    this.barsCalculated = true;
  }

  constructor(public structure: StructureService) { }

  ngOnInit() {
  }

}
