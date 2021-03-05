import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib39childlib2component0Component } from './lib39childlib2component0/lib39childlib2component0.component';
import { Lib39childlib2component1Component } from './lib39childlib2component1/lib39childlib2component1.component';
import { Lib39childlib2parentComponent } from './lib39childlib2parent/lib39childlib2parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib39childlib2component0Component, Lib39childlib2component1Component, Lib39childlib2parentComponent],
  exports: [Lib39childlib2parentComponent],
})
export class Childlib2Module {}
