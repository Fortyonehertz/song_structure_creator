import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialInputComponent } from './initial-input/initial-input.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialCustomModule} from './material-custom.module';
import { MidiGeneratorComponent } from './midi-generator/midi-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialInputComponent,
    MidiGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCustomModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
