import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib2component0Component } from './lib26childlib2component0/lib26childlib2component0.component';
import { Lib26childlib2component1Component } from './lib26childlib2component1/lib26childlib2component1.component';
import { Lib26childlib2parentComponent } from './lib26childlib2parent/lib26childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib2component0Component, Lib26childlib2component1Component, Lib26childlib2parentComponent],
  exports: [Lib26childlib2parentComponent],
})
export class Childlib2Module {}
