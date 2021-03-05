import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib4component0Component } from './lib31childlib4component0/lib31childlib4component0.component';
import { Lib31childlib4component1Component } from './lib31childlib4component1/lib31childlib4component1.component';
import { Lib31childlib4parentComponent } from './lib31childlib4parent/lib31childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib4component0Component, Lib31childlib4component1Component, Lib31childlib4parentComponent],
  exports: [Lib31childlib4parentComponent],
})
export class Childlib4Module {}
