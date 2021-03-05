import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib4component0Component } from './lib5childlib4component0/lib5childlib4component0.component';
import { Lib5childlib4component1Component } from './lib5childlib4component1/lib5childlib4component1.component';
import { Lib5childlib4parentComponent } from './lib5childlib4parent/lib5childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib4component0Component, Lib5childlib4component1Component, Lib5childlib4parentComponent],
  exports: [Lib5childlib4parentComponent],
})
export class Childlib4Module {}
