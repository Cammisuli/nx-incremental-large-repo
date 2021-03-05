import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib3component0Component } from './lib24childlib3component0/lib24childlib3component0.component';
import { Lib24childlib3component1Component } from './lib24childlib3component1/lib24childlib3component1.component';
import { Lib24childlib3parentComponent } from './lib24childlib3parent/lib24childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib3component0Component, Lib24childlib3component1Component, Lib24childlib3parentComponent],
  exports: [Lib24childlib3parentComponent],
})
export class Childlib3Module {}
