import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib7component0Component } from './lib29childlib7component0/lib29childlib7component0.component';
import { Lib29childlib7component1Component } from './lib29childlib7component1/lib29childlib7component1.component';
import { Lib29childlib7parentComponent } from './lib29childlib7parent/lib29childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib7component0Component, Lib29childlib7component1Component, Lib29childlib7parentComponent],
  exports: [Lib29childlib7parentComponent],
})
export class Childlib7Module {}
