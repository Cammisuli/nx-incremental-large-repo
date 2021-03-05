import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib0component0Component } from './lib25childlib0component0/lib25childlib0component0.component';
import { Lib25childlib0component1Component } from './lib25childlib0component1/lib25childlib0component1.component';
import { Lib25childlib0parentComponent } from './lib25childlib0parent/lib25childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib0component0Component, Lib25childlib0component1Component, Lib25childlib0parentComponent],
  exports: [Lib25childlib0parentComponent],
})
export class Childlib0Module {}
