import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib3component0Component } from './lib26childlib3component0/lib26childlib3component0.component';
import { Lib26childlib3component1Component } from './lib26childlib3component1/lib26childlib3component1.component';
import { Lib26childlib3parentComponent } from './lib26childlib3parent/lib26childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib3component0Component, Lib26childlib3component1Component, Lib26childlib3parentComponent],
  exports: [Lib26childlib3parentComponent],
})
export class Childlib3Module {}
