import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib7component0Component } from './lib28childlib7component0/lib28childlib7component0.component';
import { Lib28childlib7component1Component } from './lib28childlib7component1/lib28childlib7component1.component';
import { Lib28childlib7parentComponent } from './lib28childlib7parent/lib28childlib7parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib7component0Component, Lib28childlib7component1Component, Lib28childlib7parentComponent],
  exports: [Lib28childlib7parentComponent],
})
export class Childlib7Module {}
