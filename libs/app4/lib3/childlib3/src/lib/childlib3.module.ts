import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib3childlib3component0Component } from './lib3childlib3component0/lib3childlib3component0.component';
import { Lib3childlib3component1Component } from './lib3childlib3component1/lib3childlib3component1.component';
import { Lib3childlib3parentComponent } from './lib3childlib3parent/lib3childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib3childlib3component0Component, Lib3childlib3component1Component, Lib3childlib3parentComponent],
  exports: [Lib3childlib3parentComponent],
})
export class Childlib3Module {}
