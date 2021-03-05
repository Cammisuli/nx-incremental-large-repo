import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib7component0Component } from './lib0childlib7component0/lib0childlib7component0.component';
import { Lib0childlib7component1Component } from './lib0childlib7component1/lib0childlib7component1.component';
import { Lib0childlib7parentComponent } from './lib0childlib7parent/lib0childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib0childlib7component0Component, Lib0childlib7component1Component, Lib0childlib7parentComponent],
  exports: [Lib0childlib7parentComponent],
})
export class Childlib7Module {}
