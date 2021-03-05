import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib7component0Component } from './lib9childlib7component0/lib9childlib7component0.component';
import { Lib9childlib7component1Component } from './lib9childlib7component1/lib9childlib7component1.component';
import { Lib9childlib7parentComponent } from './lib9childlib7parent/lib9childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib7component0Component, Lib9childlib7component1Component, Lib9childlib7parentComponent],
  exports: [Lib9childlib7parentComponent],
})
export class Childlib7Module {}
