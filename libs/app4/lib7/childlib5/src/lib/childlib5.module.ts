import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib5component0Component } from './lib7childlib5component0/lib7childlib5component0.component';
import { Lib7childlib5component1Component } from './lib7childlib5component1/lib7childlib5component1.component';
import { Lib7childlib5parentComponent } from './lib7childlib5parent/lib7childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib5component0Component, Lib7childlib5component1Component, Lib7childlib5parentComponent],
  exports: [Lib7childlib5parentComponent],
})
export class Childlib5Module {}
