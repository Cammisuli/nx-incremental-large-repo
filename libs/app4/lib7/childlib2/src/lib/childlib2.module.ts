import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib2component0Component } from './lib7childlib2component0/lib7childlib2component0.component';
import { Lib7childlib2component1Component } from './lib7childlib2component1/lib7childlib2component1.component';
import { Lib7childlib2parentComponent } from './lib7childlib2parent/lib7childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib2component0Component, Lib7childlib2component1Component, Lib7childlib2parentComponent],
  exports: [Lib7childlib2parentComponent],
})
export class Childlib2Module {}
