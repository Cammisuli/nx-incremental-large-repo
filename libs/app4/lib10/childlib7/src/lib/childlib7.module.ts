import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib7component0Component } from './lib10childlib7component0/lib10childlib7component0.component';
import { Lib10childlib7component1Component } from './lib10childlib7component1/lib10childlib7component1.component';
import { Lib10childlib7parentComponent } from './lib10childlib7parent/lib10childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib7component0Component, Lib10childlib7component1Component, Lib10childlib7parentComponent],
  exports: [Lib10childlib7parentComponent],
})
export class Childlib7Module {}
