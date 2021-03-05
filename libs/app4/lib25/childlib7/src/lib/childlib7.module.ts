import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib7component0Component } from './lib25childlib7component0/lib25childlib7component0.component';
import { Lib25childlib7component1Component } from './lib25childlib7component1/lib25childlib7component1.component';
import { Lib25childlib7parentComponent } from './lib25childlib7parent/lib25childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib7component0Component, Lib25childlib7component1Component, Lib25childlib7parentComponent],
  exports: [Lib25childlib7parentComponent],
})
export class Childlib7Module {}
