import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib7component0Component } from './lib15childlib7component0/lib15childlib7component0.component';
import { Lib15childlib7component1Component } from './lib15childlib7component1/lib15childlib7component1.component';
import { Lib15childlib7parentComponent } from './lib15childlib7parent/lib15childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib7component0Component, Lib15childlib7component1Component, Lib15childlib7parentComponent],
  exports: [Lib15childlib7parentComponent],
})
export class Childlib7Module {}
