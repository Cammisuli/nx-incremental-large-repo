import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib7component0Component } from './lib30childlib7component0/lib30childlib7component0.component';
import { Lib30childlib7component1Component } from './lib30childlib7component1/lib30childlib7component1.component';
import { Lib30childlib7parentComponent } from './lib30childlib7parent/lib30childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib7component0Component, Lib30childlib7component1Component, Lib30childlib7parentComponent],
  exports: [Lib30childlib7parentComponent],
})
export class Childlib7Module {}
