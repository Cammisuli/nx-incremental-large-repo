import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib7component0Component } from './lib8childlib7component0/lib8childlib7component0.component';
import { Lib8childlib7component1Component } from './lib8childlib7component1/lib8childlib7component1.component';
import { Lib8childlib7parentComponent } from './lib8childlib7parent/lib8childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib7component0Component, Lib8childlib7component1Component, Lib8childlib7parentComponent],
  exports: [Lib8childlib7parentComponent],
})
export class Childlib7Module {}
