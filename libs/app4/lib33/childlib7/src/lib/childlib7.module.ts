import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib7component0Component } from './lib33childlib7component0/lib33childlib7component0.component';
import { Lib33childlib7component1Component } from './lib33childlib7component1/lib33childlib7component1.component';
import { Lib33childlib7parentComponent } from './lib33childlib7parent/lib33childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib7component0Component, Lib33childlib7component1Component, Lib33childlib7parentComponent],
  exports: [Lib33childlib7parentComponent],
})
export class Childlib7Module {}
