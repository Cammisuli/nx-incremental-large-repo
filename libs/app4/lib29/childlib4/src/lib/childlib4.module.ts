import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib4component0Component } from './lib29childlib4component0/lib29childlib4component0.component';
import { Lib29childlib4component1Component } from './lib29childlib4component1/lib29childlib4component1.component';
import { Lib29childlib4parentComponent } from './lib29childlib4parent/lib29childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib4component0Component, Lib29childlib4component1Component, Lib29childlib4parentComponent],
  exports: [Lib29childlib4parentComponent],
})
export class Childlib4Module {}
