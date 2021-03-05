import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib3component0Component } from './lib15childlib3component0/lib15childlib3component0.component';
import { Lib15childlib3component1Component } from './lib15childlib3component1/lib15childlib3component1.component';
import { Lib15childlib3parentComponent } from './lib15childlib3parent/lib15childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib3component0Component, Lib15childlib3component1Component, Lib15childlib3parentComponent],
  exports: [Lib15childlib3parentComponent],
})
export class Childlib3Module {}
