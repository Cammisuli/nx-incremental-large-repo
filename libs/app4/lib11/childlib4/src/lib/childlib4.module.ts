import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib4component0Component } from './lib11childlib4component0/lib11childlib4component0.component';
import { Lib11childlib4component1Component } from './lib11childlib4component1/lib11childlib4component1.component';
import { Lib11childlib4parentComponent } from './lib11childlib4parent/lib11childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib4component0Component, Lib11childlib4component1Component, Lib11childlib4parentComponent],
  exports: [Lib11childlib4parentComponent],
})
export class Childlib4Module {}
