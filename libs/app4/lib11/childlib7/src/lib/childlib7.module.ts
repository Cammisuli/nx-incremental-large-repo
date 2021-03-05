import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib7component0Component } from './lib11childlib7component0/lib11childlib7component0.component';
import { Lib11childlib7component1Component } from './lib11childlib7component1/lib11childlib7component1.component';
import { Lib11childlib7parentComponent } from './lib11childlib7parent/lib11childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib7component0Component, Lib11childlib7component1Component, Lib11childlib7parentComponent],
  exports: [Lib11childlib7parentComponent],
})
export class Childlib7Module {}
