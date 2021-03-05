import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib7component0Component } from './lib18childlib7component0/lib18childlib7component0.component';
import { Lib18childlib7component1Component } from './lib18childlib7component1/lib18childlib7component1.component';
import { Lib18childlib7parentComponent } from './lib18childlib7parent/lib18childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib7component0Component, Lib18childlib7component1Component, Lib18childlib7parentComponent],
  exports: [Lib18childlib7parentComponent],
})
export class Childlib7Module {}
