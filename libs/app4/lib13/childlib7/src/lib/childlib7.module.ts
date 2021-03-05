import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib7component0Component } from './lib13childlib7component0/lib13childlib7component0.component';
import { Lib13childlib7component1Component } from './lib13childlib7component1/lib13childlib7component1.component';
import { Lib13childlib7parentComponent } from './lib13childlib7parent/lib13childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib7component0Component, Lib13childlib7component1Component, Lib13childlib7parentComponent],
  exports: [Lib13childlib7parentComponent],
})
export class Childlib7Module {}
