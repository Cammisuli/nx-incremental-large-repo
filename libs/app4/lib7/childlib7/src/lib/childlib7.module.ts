import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib7component0Component } from './lib7childlib7component0/lib7childlib7component0.component';
import { Lib7childlib7component1Component } from './lib7childlib7component1/lib7childlib7component1.component';
import { Lib7childlib7parentComponent } from './lib7childlib7parent/lib7childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib7component0Component, Lib7childlib7component1Component, Lib7childlib7parentComponent],
  exports: [Lib7childlib7parentComponent],
})
export class Childlib7Module {}
