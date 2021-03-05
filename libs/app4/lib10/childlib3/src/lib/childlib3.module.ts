import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib3component0Component } from './lib10childlib3component0/lib10childlib3component0.component';
import { Lib10childlib3component1Component } from './lib10childlib3component1/lib10childlib3component1.component';
import { Lib10childlib3parentComponent } from './lib10childlib3parent/lib10childlib3parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib3component0Component, Lib10childlib3component1Component, Lib10childlib3parentComponent],
  exports: [Lib10childlib3parentComponent],
})
export class Childlib3Module {}
