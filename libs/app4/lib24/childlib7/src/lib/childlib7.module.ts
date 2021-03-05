import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib7component0Component } from './lib24childlib7component0/lib24childlib7component0.component';
import { Lib24childlib7component1Component } from './lib24childlib7component1/lib24childlib7component1.component';
import { Lib24childlib7parentComponent } from './lib24childlib7parent/lib24childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib7component0Component, Lib24childlib7component1Component, Lib24childlib7parentComponent],
  exports: [Lib24childlib7parentComponent],
})
export class Childlib7Module {}
