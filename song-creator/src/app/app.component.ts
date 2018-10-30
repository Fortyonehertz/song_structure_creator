import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'song-creator';
  opened = false;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'burger',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/burger.svg'));
  }

  toggleSideNav() {
    this.opened = !this.opened;
  }
}
