import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib39childlib0component0Component } from './lib39childlib0component0/lib39childlib0component0.component';
import { Lib39childlib0component1Component } from './lib39childlib0component1/lib39childlib0component1.component';
import { Lib39childlib0parentComponent } from './lib39childlib0parent/lib39childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib39childlib0component0Component, Lib39childlib0component1Component, Lib39childlib0parentComponent],
  exports: [Lib39childlib0parentComponent],
})
export class Childlib0Module {}
