import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib5component0Component } from './lib0childlib5component0/lib0childlib5component0.component';
import { Lib0childlib5component1Component } from './lib0childlib5component1/lib0childlib5component1.component';
import { Lib0childlib5parentComponent } from './lib0childlib5parent/lib0childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib0childlib5component0Component, Lib0childlib5component1Component, Lib0childlib5parentComponent],
  exports: [Lib0childlib5parentComponent],
})
export class Childlib5Module {}
