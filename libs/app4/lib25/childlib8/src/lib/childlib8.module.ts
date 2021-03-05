import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib8component0Component } from './lib25childlib8component0/lib25childlib8component0.component';
import { Lib25childlib8component1Component } from './lib25childlib8component1/lib25childlib8component1.component';
import { Lib25childlib8parentComponent } from './lib25childlib8parent/lib25childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib8component0Component, Lib25childlib8component1Component, Lib25childlib8parentComponent],
  exports: [Lib25childlib8parentComponent],
})
export class Childlib8Module {}
