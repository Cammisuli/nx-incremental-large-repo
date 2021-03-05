import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib3component0Component } from './lib9childlib3component0/lib9childlib3component0.component';
import { Lib9childlib3component1Component } from './lib9childlib3component1/lib9childlib3component1.component';
import { Lib9childlib3parentComponent } from './lib9childlib3parent/lib9childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib3component0Component, Lib9childlib3component1Component, Lib9childlib3parentComponent],
  exports: [Lib9childlib3parentComponent],
})
export class Childlib3Module {}
