import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router



const routes: Routes = []; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
  
}
