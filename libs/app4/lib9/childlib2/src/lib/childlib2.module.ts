import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib2component0Component } from './lib9childlib2component0/lib9childlib2component0.component';
import { Lib9childlib2component1Component } from './lib9childlib2component1/lib9childlib2component1.component';
import { Lib9childlib2parentComponent } from './lib9childlib2parent/lib9childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib2component0Component, Lib9childlib2component1Component, Lib9childlib2parentComponent],
  exports: [Lib9childlib2parentComponent],
})
export class Childlib2Module {}
