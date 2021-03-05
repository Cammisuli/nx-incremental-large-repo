import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib4component0Component } from './lib30childlib4component0/lib30childlib4component0.component';
import { Lib30childlib4component1Component } from './lib30childlib4component1/lib30childlib4component1.component';
import { Lib30childlib4parentComponent } from './lib30childlib4parent/lib30childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib4component0Component, Lib30childlib4component1Component, Lib30childlib4parentComponent],
  exports: [Lib30childlib4parentComponent],
})
export class Childlib4Module {}
