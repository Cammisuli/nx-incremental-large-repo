import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib3component0Component } from './lib21childlib3component0/lib21childlib3component0.component';
import { Lib21childlib3component1Component } from './lib21childlib3component1/lib21childlib3component1.component';
import { Lib21childlib3parentComponent } from './lib21childlib3parent/lib21childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib3component0Component, Lib21childlib3component1Component, Lib21childlib3parentComponent],
  exports: [Lib21childlib3parentComponent],
})
export class Childlib3Module {}
