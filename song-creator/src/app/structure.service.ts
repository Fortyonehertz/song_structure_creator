import { Injectable } from '@angular/core';
import { SimpleTime } from './initial-input/simple-time';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  bpm: number = 0;
  seconds: number = 0;
  minutes: number = 0;
  bars: number = 0;
  beatsPerBar: number = 4;
  totalBeats: number = 0;

  setBPM(bpm: number) {
    this.bpm = bpm;
    console.log("BPM: " + this.bpm);
  }

  setTime(time: SimpleTime) {
    this.seconds = time.seconds;
    this.minutes = time.minutes;
    console.log("Seconds: " + this.seconds);
    console.log("Minutes: " + this.minutes);
  }
  
  setTimeSignature(beatsPerBar: number) {
    this.beatsPerBar = beatsPerBar;
    console.log("Beats Per Bar: " + this.beatsPerBar);
  }

  calculateBars() {
    console.log("BPM: " + this.bpm);
    console.log("Seconds: " + this.seconds);
    console.log("Minutes: " + this.minutes);
    console.log("Beats Per Bar: " + this.beatsPerBar);
    var beatsPerSecond = Math.round(this.bpm/60);
    var totalSeconds = (this.minutes * 60) + this.seconds;
    this.totalBeats =  beatsPerSecond * totalSeconds;
    console.log("Total beats: " + this.totalBeats);
    var roundedBeats = this.totalBeats - (this.totalBeats % this.beatsPerBar);
    this.bars = roundedBeats/this.beatsPerBar;
    this.totalBeats = this.beatsPerBar * this.bars;
    console.log("Bars: " + this.bars);
    return this.bars;
  }
}
