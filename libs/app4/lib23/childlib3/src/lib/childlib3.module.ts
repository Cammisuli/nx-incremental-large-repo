import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib3component0Component } from './lib23childlib3component0/lib23childlib3component0.component';
import { Lib23childlib3component1Component } from './lib23childlib3component1/lib23childlib3component1.component';
import { Lib23childlib3parentComponent } from './lib23childlib3parent/lib23childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib3component0Component, Lib23childlib3component1Component, Lib23childlib3parentComponent],
  exports: [Lib23childlib3parentComponent],
})
export class Childlib3Module {}
