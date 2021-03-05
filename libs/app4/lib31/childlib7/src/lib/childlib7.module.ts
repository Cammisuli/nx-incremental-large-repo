import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib7component0Component } from './lib31childlib7component0/lib31childlib7component0.component';
import { Lib31childlib7component1Component } from './lib31childlib7component1/lib31childlib7component1.component';
import { Lib31childlib7parentComponent } from './lib31childlib7parent/lib31childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib7component0Component, Lib31childlib7component1Component, Lib31childlib7parentComponent],
  exports: [Lib31childlib7parentComponent],
})
export class Childlib7Module {}
