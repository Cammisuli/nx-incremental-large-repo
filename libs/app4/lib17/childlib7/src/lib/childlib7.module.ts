import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib7component0Component } from './lib17childlib7component0/lib17childlib7component0.component';
import { Lib17childlib7component1Component } from './lib17childlib7component1/lib17childlib7component1.component';
import { Lib17childlib7parentComponent } from './lib17childlib7parent/lib17childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib7component0Component, Lib17childlib7component1Component, Lib17childlib7parentComponent],
  exports: [Lib17childlib7parentComponent],
})
export class Childlib7Module {}
