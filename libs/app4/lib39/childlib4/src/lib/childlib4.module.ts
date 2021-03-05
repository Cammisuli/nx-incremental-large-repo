import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib39childlib4component0Component } from './lib39childlib4component0/lib39childlib4component0.component';
import { Lib39childlib4component1Component } from './lib39childlib4component1/lib39childlib4component1.component';
import { Lib39childlib4parentComponent } from './lib39childlib4parent/lib39childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib39childlib4component0Component, Lib39childlib4component1Component, Lib39childlib4parentComponent],
  exports: [Lib39childlib4parentComponent],
})
export class Childlib4Module {}
