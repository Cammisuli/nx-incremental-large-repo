import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib2component0Component } from './lib20childlib2component0/lib20childlib2component0.component';
import { Lib20childlib2component1Component } from './lib20childlib2component1/lib20childlib2component1.component';
import { Lib20childlib2parentComponent } from './lib20childlib2parent/lib20childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib2component0Component, Lib20childlib2component1Component, Lib20childlib2parentComponent],
  exports: [Lib20childlib2parentComponent],
})
export class Childlib2Module {}
