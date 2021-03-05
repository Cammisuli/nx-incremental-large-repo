import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib4component0Component } from './lib14childlib4component0/lib14childlib4component0.component';
import { Lib14childlib4component1Component } from './lib14childlib4component1/lib14childlib4component1.component';
import { Lib14childlib4parentComponent } from './lib14childlib4parent/lib14childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib4component0Component, Lib14childlib4component1Component, Lib14childlib4parentComponent],
  exports: [Lib14childlib4parentComponent],
})
export class Childlib4Module {}
