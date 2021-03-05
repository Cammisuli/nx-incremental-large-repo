import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib2component0Component } from './lib17childlib2component0/lib17childlib2component0.component';
import { Lib17childlib2component1Component } from './lib17childlib2component1/lib17childlib2component1.component';
import { Lib17childlib2parentComponent } from './lib17childlib2parent/lib17childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib2component0Component, Lib17childlib2component1Component, Lib17childlib2parentComponent],
  exports: [Lib17childlib2parentComponent],
})
export class Childlib2Module {}
