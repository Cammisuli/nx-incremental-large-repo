import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib0component0Component } from './lib8childlib0component0/lib8childlib0component0.component';
import { Lib8childlib0component1Component } from './lib8childlib0component1/lib8childlib0component1.component';
import { Lib8childlib0parentComponent } from './lib8childlib0parent/lib8childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib0component0Component, Lib8childlib0component1Component, Lib8childlib0parentComponent],
  exports: [Lib8childlib0parentComponent],
})
export class Childlib0Module {}
