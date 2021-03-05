import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib7component0Component } from './lib5childlib7component0/lib5childlib7component0.component';
import { Lib5childlib7component1Component } from './lib5childlib7component1/lib5childlib7component1.component';
import { Lib5childlib7parentComponent } from './lib5childlib7parent/lib5childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib7component0Component, Lib5childlib7component1Component, Lib5childlib7parentComponent],
  exports: [Lib5childlib7parentComponent],
})
export class Childlib7Module {}
