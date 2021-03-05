import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib3component0Component } from './lib20childlib3component0/lib20childlib3component0.component';
import { Lib20childlib3component1Component } from './lib20childlib3component1/lib20childlib3component1.component';
import { Lib20childlib3parentComponent } from './lib20childlib3parent/lib20childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib3component0Component, Lib20childlib3component1Component, Lib20childlib3parentComponent],
  exports: [Lib20childlib3parentComponent],
})
export class Childlib3Module {}
