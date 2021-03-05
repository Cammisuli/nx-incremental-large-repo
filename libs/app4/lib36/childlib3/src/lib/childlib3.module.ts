import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib3component0Component } from './lib36childlib3component0/lib36childlib3component0.component';
import { Lib36childlib3component1Component } from './lib36childlib3component1/lib36childlib3component1.component';
import { Lib36childlib3parentComponent } from './lib36childlib3parent/lib36childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib3component0Component, Lib36childlib3component1Component, Lib36childlib3parentComponent],
  exports: [Lib36childlib3parentComponent],
})
export class Childlib3Module {}
