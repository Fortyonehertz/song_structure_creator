import  {NgModule}from "@angular/core";
import {
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatSidenavModule,
      MatIconModule,
      MatToolbarModule,
      MatListModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatSliderModule
    ],
  exports: [
      MatButtonModule, 
      MatCheckboxModule,
      MatSidenavModule,
      MatIconModule,
      MatToolbarModule,
      MatListModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatSliderModule
],
})
export class MaterialCustomModule { }