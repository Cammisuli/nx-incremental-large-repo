import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib2component0Component } from './lib14childlib2component0/lib14childlib2component0.component';
import { Lib14childlib2component1Component } from './lib14childlib2component1/lib14childlib2component1.component';
import { Lib14childlib2parentComponent } from './lib14childlib2parent/lib14childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib2component0Component, Lib14childlib2component1Component, Lib14childlib2parentComponent],
  exports: [Lib14childlib2parentComponent],
})
export class Childlib2Module {}
