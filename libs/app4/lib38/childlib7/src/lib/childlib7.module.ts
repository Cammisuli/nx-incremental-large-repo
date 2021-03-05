import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib7component0Component } from './lib38childlib7component0/lib38childlib7component0.component';
import { Lib38childlib7component1Component } from './lib38childlib7component1/lib38childlib7component1.component';
import { Lib38childlib7parentComponent } from './lib38childlib7parent/lib38childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib7component0Component, Lib38childlib7component1Component, Lib38childlib7parentComponent],
  exports: [Lib38childlib7parentComponent],
})
export class Childlib7Module {}
