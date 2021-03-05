import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib7component0Component } from './lib22childlib7component0/lib22childlib7component0.component';
import { Lib22childlib7component1Component } from './lib22childlib7component1/lib22childlib7component1.component';
import { Lib22childlib7parentComponent } from './lib22childlib7parent/lib22childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib7component0Component, Lib22childlib7component1Component, Lib22childlib7parentComponent],
  exports: [Lib22childlib7parentComponent],
})
export class Childlib7Module {}
