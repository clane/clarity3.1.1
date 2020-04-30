import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';
import { FourthComponent } from '../fourth/fourth.component';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router



const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
  
}
