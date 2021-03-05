import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib5component0Component } from './lib14childlib5component0/lib14childlib5component0.component';
import { Lib14childlib5component1Component } from './lib14childlib5component1/lib14childlib5component1.component';
import { Lib14childlib5parentComponent } from './lib14childlib5parent/lib14childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib5component0Component, Lib14childlib5component1Component, Lib14childlib5parentComponent],
  exports: [Lib14childlib5parentComponent],
})
export class Childlib5Module {}
