import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib5component0Component } from './lib8childlib5component0/lib8childlib5component0.component';
import { Lib8childlib5component1Component } from './lib8childlib5component1/lib8childlib5component1.component';
import { Lib8childlib5parentComponent } from './lib8childlib5parent/lib8childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib5component0Component, Lib8childlib5component1Component, Lib8childlib5parentComponent],
  exports: [Lib8childlib5parentComponent],
})
export class Childlib5Module {}
