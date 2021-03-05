import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib2component0Component } from './lib0childlib2component0/lib0childlib2component0.component';
import { Lib0childlib2component1Component } from './lib0childlib2component1/lib0childlib2component1.component';
import { Lib0childlib2parentComponent } from './lib0childlib2parent/lib0childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib0childlib2component0Component, Lib0childlib2component1Component, Lib0childlib2parentComponent],
  exports: [Lib0childlib2parentComponent],
})
export class Childlib2Module {}
