import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib34childlib7component0Component } from './lib34childlib7component0/lib34childlib7component0.component';
import { Lib34childlib7component1Component } from './lib34childlib7component1/lib34childlib7component1.component';
import { Lib34childlib7parentComponent } from './lib34childlib7parent/lib34childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib34childlib7component0Component, Lib34childlib7component1Component, Lib34childlib7parentComponent],
  exports: [Lib34childlib7parentComponent],
})
export class Childlib7Module {}
