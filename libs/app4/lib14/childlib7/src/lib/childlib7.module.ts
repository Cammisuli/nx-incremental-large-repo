import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib7component0Component } from './lib14childlib7component0/lib14childlib7component0.component';
import { Lib14childlib7component1Component } from './lib14childlib7component1/lib14childlib7component1.component';
import { Lib14childlib7parentComponent } from './lib14childlib7parent/lib14childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib7component0Component, Lib14childlib7component1Component, Lib14childlib7parentComponent],
  exports: [Lib14childlib7parentComponent],
})
export class Childlib7Module {}
