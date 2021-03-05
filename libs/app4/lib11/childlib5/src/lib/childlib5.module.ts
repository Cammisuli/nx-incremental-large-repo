import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib5component0Component } from './lib11childlib5component0/lib11childlib5component0.component';
import { Lib11childlib5component1Component } from './lib11childlib5component1/lib11childlib5component1.component';
import { Lib11childlib5parentComponent } from './lib11childlib5parent/lib11childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib5component0Component, Lib11childlib5component1Component, Lib11childlib5parentComponent],
  exports: [Lib11childlib5parentComponent],
})
export class Childlib5Module {}
