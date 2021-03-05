import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib17childlib0component0Component } from './lib17childlib0component0/lib17childlib0component0.component';
import { Lib17childlib0component1Component } from './lib17childlib0component1/lib17childlib0component1.component';
import { Lib17childlib0parentComponent } from './lib17childlib0parent/lib17childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib17childlib0component0Component, Lib17childlib0component1Component, Lib17childlib0parentComponent],
  exports: [Lib17childlib0parentComponent],
})
export class Childlib0Module {}
