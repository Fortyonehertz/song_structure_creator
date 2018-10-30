import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialInputComponent } from './initial-input/initial-input.component';

const routes: Routes = [
  { path: '', component: InitialInputComponent },
  { path: 'new-structure', component: InitialInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
