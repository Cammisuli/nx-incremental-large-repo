import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib7component0Component } from './lib21childlib7component0/lib21childlib7component0.component';
import { Lib21childlib7component1Component } from './lib21childlib7component1/lib21childlib7component1.component';
import { Lib21childlib7parentComponent } from './lib21childlib7parent/lib21childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib7component0Component, Lib21childlib7component1Component, Lib21childlib7parentComponent],
  exports: [Lib21childlib7parentComponent],
})
export class Childlib7Module {}
