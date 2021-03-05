import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib3component0Component } from './lib13childlib3component0/lib13childlib3component0.component';
import { Lib13childlib3component1Component } from './lib13childlib3component1/lib13childlib3component1.component';
import { Lib13childlib3parentComponent } from './lib13childlib3parent/lib13childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib3component0Component, Lib13childlib3component1Component, Lib13childlib3parentComponent],
  exports: [Lib13childlib3parentComponent],
})
export class Childlib3Module {}
