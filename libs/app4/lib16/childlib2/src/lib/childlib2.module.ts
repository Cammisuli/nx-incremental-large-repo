import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib2component0Component } from './lib16childlib2component0/lib16childlib2component0.component';
import { Lib16childlib2component1Component } from './lib16childlib2component1/lib16childlib2component1.component';
import { Lib16childlib2parentComponent } from './lib16childlib2parent/lib16childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib2component0Component, Lib16childlib2component1Component, Lib16childlib2parentComponent],
  exports: [Lib16childlib2parentComponent],
})
export class Childlib2Module {}
