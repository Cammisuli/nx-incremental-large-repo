import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib4component0Component } from './lib20childlib4component0/lib20childlib4component0.component';
import { Lib20childlib4component1Component } from './lib20childlib4component1/lib20childlib4component1.component';
import { Lib20childlib4parentComponent } from './lib20childlib4parent/lib20childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib4component0Component, Lib20childlib4component1Component, Lib20childlib4parentComponent],
  exports: [Lib20childlib4parentComponent],
})
export class Childlib4Module {}
