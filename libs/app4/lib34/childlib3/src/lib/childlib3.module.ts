import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib3component0Component } from './lib34childlib3component0/lib34childlib3component0.component';
import { Lib34childlib3component1Component } from './lib34childlib3component1/lib34childlib3component1.component';
import { Lib34childlib3parentComponent } from './lib34childlib3parent/lib34childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib3component0Component, Lib34childlib3component1Component, Lib34childlib3parentComponent],
  exports: [Lib34childlib3parentComponent],
})
export class Childlib3Module {}
