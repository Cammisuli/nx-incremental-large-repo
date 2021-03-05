import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib2component0Component } from './lib30childlib2component0/lib30childlib2component0.component';
import { Lib30childlib2component1Component } from './lib30childlib2component1/lib30childlib2component1.component';
import { Lib30childlib2parentComponent } from './lib30childlib2parent/lib30childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib2component0Component, Lib30childlib2component1Component, Lib30childlib2parentComponent],
  exports: [Lib30childlib2parentComponent],
})
export class Childlib2Module {}
