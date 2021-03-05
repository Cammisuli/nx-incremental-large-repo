import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib8component0Component } from './lib28childlib8component0/lib28childlib8component0.component';
import { Lib28childlib8component1Component } from './lib28childlib8component1/lib28childlib8component1.component';
import { Lib28childlib8parentComponent } from './lib28childlib8parent/lib28childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib8component0Component, Lib28childlib8component1Component, Lib28childlib8parentComponent],
  exports: [Lib28childlib8parentComponent],
})
export class Childlib8Module {}
