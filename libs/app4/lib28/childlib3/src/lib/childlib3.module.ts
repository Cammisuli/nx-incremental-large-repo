import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib3component0Component } from './lib28childlib3component0/lib28childlib3component0.component';
import { Lib28childlib3component1Component } from './lib28childlib3component1/lib28childlib3component1.component';
import { Lib28childlib3parentComponent } from './lib28childlib3parent/lib28childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib3component0Component, Lib28childlib3component1Component, Lib28childlib3parentComponent],
  exports: [Lib28childlib3parentComponent],
})
export class Childlib3Module {}
