import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib4component0Component } from './lib26childlib4component0/lib26childlib4component0.component';
import { Lib26childlib4component1Component } from './lib26childlib4component1/lib26childlib4component1.component';
import { Lib26childlib4parentComponent } from './lib26childlib4parent/lib26childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib4component0Component, Lib26childlib4component1Component, Lib26childlib4parentComponent],
  exports: [Lib26childlib4parentComponent],
})
export class Childlib4Module {}
