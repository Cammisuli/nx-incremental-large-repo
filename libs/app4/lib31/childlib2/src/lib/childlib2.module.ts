import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib2component0Component } from './lib31childlib2component0/lib31childlib2component0.component';
import { Lib31childlib2component1Component } from './lib31childlib2component1/lib31childlib2component1.component';
import { Lib31childlib2parentComponent } from './lib31childlib2parent/lib31childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib2component0Component, Lib31childlib2component1Component, Lib31childlib2parentComponent],
  exports: [Lib31childlib2parentComponent],
})
export class Childlib2Module {}
