import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib3component0Component } from './lib19childlib3component0/lib19childlib3component0.component';
import { Lib19childlib3component1Component } from './lib19childlib3component1/lib19childlib3component1.component';
import { Lib19childlib3parentComponent } from './lib19childlib3parent/lib19childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib3component0Component, Lib19childlib3component1Component, Lib19childlib3parentComponent],
  exports: [Lib19childlib3parentComponent],
})
export class Childlib3Module {}
