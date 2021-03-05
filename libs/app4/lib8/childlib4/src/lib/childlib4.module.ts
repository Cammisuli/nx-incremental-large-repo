import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib4component0Component } from './lib8childlib4component0/lib8childlib4component0.component';
import { Lib8childlib4component1Component } from './lib8childlib4component1/lib8childlib4component1.component';
import { Lib8childlib4parentComponent } from './lib8childlib4parent/lib8childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib4component0Component, Lib8childlib4component1Component, Lib8childlib4parentComponent],
  exports: [Lib8childlib4parentComponent],
})
export class Childlib4Module {}
