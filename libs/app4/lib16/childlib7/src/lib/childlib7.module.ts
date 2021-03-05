import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib7component0Component } from './lib16childlib7component0/lib16childlib7component0.component';
import { Lib16childlib7component1Component } from './lib16childlib7component1/lib16childlib7component1.component';
import { Lib16childlib7parentComponent } from './lib16childlib7parent/lib16childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib7component0Component, Lib16childlib7component1Component, Lib16childlib7parentComponent],
  exports: [Lib16childlib7parentComponent],
})
export class Childlib7Module {}
