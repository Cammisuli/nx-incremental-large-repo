import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib7component0Component } from './lib27childlib7component0/lib27childlib7component0.component';
import { Lib27childlib7component1Component } from './lib27childlib7component1/lib27childlib7component1.component';
import { Lib27childlib7parentComponent } from './lib27childlib7parent/lib27childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib7component0Component, Lib27childlib7component1Component, Lib27childlib7parentComponent],
  exports: [Lib27childlib7parentComponent],
})
export class Childlib7Module {}
