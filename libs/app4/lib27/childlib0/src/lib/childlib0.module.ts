import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib0component0Component } from './lib27childlib0component0/lib27childlib0component0.component';
import { Lib27childlib0component1Component } from './lib27childlib0component1/lib27childlib0component1.component';
import { Lib27childlib0parentComponent } from './lib27childlib0parent/lib27childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib0component0Component, Lib27childlib0component1Component, Lib27childlib0parentComponent],
  exports: [Lib27childlib0parentComponent],
})
export class Childlib0Module {}
