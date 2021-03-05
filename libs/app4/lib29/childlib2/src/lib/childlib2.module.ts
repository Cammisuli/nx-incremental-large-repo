import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib2component0Component } from './lib29childlib2component0/lib29childlib2component0.component';
import { Lib29childlib2component1Component } from './lib29childlib2component1/lib29childlib2component1.component';
import { Lib29childlib2parentComponent } from './lib29childlib2parent/lib29childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib2component0Component, Lib29childlib2component1Component, Lib29childlib2parentComponent],
  exports: [Lib29childlib2parentComponent],
})
export class Childlib2Module {}
