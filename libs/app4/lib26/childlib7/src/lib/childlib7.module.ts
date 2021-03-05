import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib7component0Component } from './lib26childlib7component0/lib26childlib7component0.component';
import { Lib26childlib7component1Component } from './lib26childlib7component1/lib26childlib7component1.component';
import { Lib26childlib7parentComponent } from './lib26childlib7parent/lib26childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib7component0Component, Lib26childlib7component1Component, Lib26childlib7parentComponent],
  exports: [Lib26childlib7parentComponent],
})
export class Childlib7Module {}
