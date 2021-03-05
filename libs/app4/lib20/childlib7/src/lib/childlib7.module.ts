import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib7component0Component } from './lib20childlib7component0/lib20childlib7component0.component';
import { Lib20childlib7component1Component } from './lib20childlib7component1/lib20childlib7component1.component';
import { Lib20childlib7parentComponent } from './lib20childlib7parent/lib20childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib7component0Component, Lib20childlib7component1Component, Lib20childlib7parentComponent],
  exports: [Lib20childlib7parentComponent],
})
export class Childlib7Module {}
