import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib2component0Component } from './lib38childlib2component0/lib38childlib2component0.component';
import { Lib38childlib2component1Component } from './lib38childlib2component1/lib38childlib2component1.component';
import { Lib38childlib2parentComponent } from './lib38childlib2parent/lib38childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib2component0Component, Lib38childlib2component1Component, Lib38childlib2parentComponent],
  exports: [Lib38childlib2parentComponent],
})
export class Childlib2Module {}
