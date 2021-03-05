import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib8component0Component } from './lib17childlib8component0/lib17childlib8component0.component';
import { Lib17childlib8component1Component } from './lib17childlib8component1/lib17childlib8component1.component';
import { Lib17childlib8parentComponent } from './lib17childlib8parent/lib17childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib8component0Component, Lib17childlib8component1Component, Lib17childlib8parentComponent],
  exports: [Lib17childlib8parentComponent],
})
export class Childlib8Module {}
