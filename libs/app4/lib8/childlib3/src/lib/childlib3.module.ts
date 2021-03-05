import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib3component0Component } from './lib8childlib3component0/lib8childlib3component0.component';
import { Lib8childlib3component1Component } from './lib8childlib3component1/lib8childlib3component1.component';
import { Lib8childlib3parentComponent } from './lib8childlib3parent/lib8childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib3component0Component, Lib8childlib3component1Component, Lib8childlib3parentComponent],
  exports: [Lib8childlib3parentComponent],
})
export class Childlib3Module {}
