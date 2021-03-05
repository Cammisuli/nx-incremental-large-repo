import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib2component0Component } from './lib21childlib2component0/lib21childlib2component0.component';
import { Lib21childlib2component1Component } from './lib21childlib2component1/lib21childlib2component1.component';
import { Lib21childlib2parentComponent } from './lib21childlib2parent/lib21childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib2component0Component, Lib21childlib2component1Component, Lib21childlib2parentComponent],
  exports: [Lib21childlib2parentComponent],
})
export class Childlib2Module {}
