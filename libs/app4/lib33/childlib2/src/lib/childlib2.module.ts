import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib2component0Component } from './lib33childlib2component0/lib33childlib2component0.component';
import { Lib33childlib2component1Component } from './lib33childlib2component1/lib33childlib2component1.component';
import { Lib33childlib2parentComponent } from './lib33childlib2parent/lib33childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib2component0Component, Lib33childlib2component1Component, Lib33childlib2parentComponent],
  exports: [Lib33childlib2parentComponent],
})
export class Childlib2Module {}
