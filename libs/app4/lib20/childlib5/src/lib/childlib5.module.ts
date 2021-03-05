import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib5component0Component } from './lib20childlib5component0/lib20childlib5component0.component';
import { Lib20childlib5component1Component } from './lib20childlib5component1/lib20childlib5component1.component';
import { Lib20childlib5parentComponent } from './lib20childlib5parent/lib20childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib5component0Component, Lib20childlib5component1Component, Lib20childlib5parentComponent],
  exports: [Lib20childlib5parentComponent],
})
export class Childlib5Module {}
