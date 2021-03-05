import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib4component0Component } from './lib15childlib4component0/lib15childlib4component0.component';
import { Lib15childlib4component1Component } from './lib15childlib4component1/lib15childlib4component1.component';
import { Lib15childlib4parentComponent } from './lib15childlib4parent/lib15childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib4component0Component, Lib15childlib4component1Component, Lib15childlib4parentComponent],
  exports: [Lib15childlib4parentComponent],
})
export class Childlib4Module {}
