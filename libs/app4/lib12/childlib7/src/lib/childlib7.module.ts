import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib7component0Component } from './lib12childlib7component0/lib12childlib7component0.component';
import { Lib12childlib7component1Component } from './lib12childlib7component1/lib12childlib7component1.component';
import { Lib12childlib7parentComponent } from './lib12childlib7parent/lib12childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib7component0Component, Lib12childlib7component1Component, Lib12childlib7parentComponent],
  exports: [Lib12childlib7parentComponent],
})
export class Childlib7Module {}
