import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib2component0Component } from './lib15childlib2component0/lib15childlib2component0.component';
import { Lib15childlib2component1Component } from './lib15childlib2component1/lib15childlib2component1.component';
import { Lib15childlib2parentComponent } from './lib15childlib2parent/lib15childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib2component0Component, Lib15childlib2component1Component, Lib15childlib2parentComponent],
  exports: [Lib15childlib2parentComponent],
})
export class Childlib2Module {}
