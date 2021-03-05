import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib5component0Component } from './lib5childlib5component0/lib5childlib5component0.component';
import { Lib5childlib5component1Component } from './lib5childlib5component1/lib5childlib5component1.component';
import { Lib5childlib5parentComponent } from './lib5childlib5parent/lib5childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib5component0Component, Lib5childlib5component1Component, Lib5childlib5parentComponent],
  exports: [Lib5childlib5parentComponent],
})
export class Childlib5Module {}
