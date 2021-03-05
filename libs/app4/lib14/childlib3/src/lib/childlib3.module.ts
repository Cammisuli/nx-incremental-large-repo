import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib3component0Component } from './lib14childlib3component0/lib14childlib3component0.component';
import { Lib14childlib3component1Component } from './lib14childlib3component1/lib14childlib3component1.component';
import { Lib14childlib3parentComponent } from './lib14childlib3parent/lib14childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib3component0Component, Lib14childlib3component1Component, Lib14childlib3parentComponent],
  exports: [Lib14childlib3parentComponent],
})
export class Childlib3Module {}
