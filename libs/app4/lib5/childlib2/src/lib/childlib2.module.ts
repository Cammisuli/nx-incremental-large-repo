import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib2component0Component } from './lib5childlib2component0/lib5childlib2component0.component';
import { Lib5childlib2component1Component } from './lib5childlib2component1/lib5childlib2component1.component';
import { Lib5childlib2parentComponent } from './lib5childlib2parent/lib5childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib2component0Component, Lib5childlib2component1Component, Lib5childlib2parentComponent],
  exports: [Lib5childlib2parentComponent],
})
export class Childlib2Module {}
