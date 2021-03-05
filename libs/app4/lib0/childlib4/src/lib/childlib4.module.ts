import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib4component0Component } from './lib0childlib4component0/lib0childlib4component0.component';
import { Lib0childlib4component1Component } from './lib0childlib4component1/lib0childlib4component1.component';
import { Lib0childlib4parentComponent } from './lib0childlib4parent/lib0childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib0childlib4component0Component, Lib0childlib4component1Component, Lib0childlib4parentComponent],
  exports: [Lib0childlib4parentComponent],
})
export class Childlib4Module {}
