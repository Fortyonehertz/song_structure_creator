import { Component, OnInit } from '@angular/core';
import {SimpleTime} from './simple-time';
import { StructureService } from '../structure.service';
import { File, Track, MidiEvent, MetaEvent, Midi } from '../../../lib/jsmidgen/lib/jsmidgen.js';
import { saveAs } from '../../../lib/FileSaver.js/src/FileSaver.js'

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
  beatsPerBar: number = 4;
  generateMidi = false;

  timeObject: SimpleTime = new SimpleTime();

  setBPM() {
    this.structure.setBPM(this.bpm);
  }

  setTimeSignature() {
    this.structure.setTimeSignature(this.beatsPerBar);
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

  toggleGenerate() {
    this.generateMidi = true;
  }

  generate() {
    console.log("Total Beats: " + this.structure.totalBeats);
    var newMidiFile = new File();
    newMidiFile.addTrack(new Track().setTempo(this.bpm));
    var newMidiTrack = new Track();
    newMidiFile.addTrack(newMidiTrack);
    newMidiTrack.setTempo(this.structure.bpm);
    for (var i=0; i < this.structure.totalBeats; i++) {
      console.log(newMidiTrack.addNote(5, 48, 128, 0, 127));
    }
    console.log(newMidiFile);

    var FileSaver = saveAs;

    var bytes = newMidiFile.toBytes() // remember, this is just a string
    var u16 = new Uint8Array(bytes.length)
    // Copy over all the values
    for(var i=0;i<bytes.length;i++){
      u16[i] = bytes[i].charCodeAt(0)
    }
    // Now we write the typed array to the Blob instead of the string
    var blob = new Blob([u16], {type:'audio/midi'})
    FileSaver.saveAs(blob, "new-midi.mid");
  }

  constructor(public structure: StructureService) { }

  ngOnInit() {
  }

}
