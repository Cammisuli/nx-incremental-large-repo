import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib4component0Component } from './lib16childlib4component0/lib16childlib4component0.component';
import { Lib16childlib4component1Component } from './lib16childlib4component1/lib16childlib4component1.component';
import { Lib16childlib4parentComponent } from './lib16childlib4parent/lib16childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib4component0Component, Lib16childlib4component1Component, Lib16childlib4parentComponent],
  exports: [Lib16childlib4parentComponent],
})
export class Childlib4Module {}
