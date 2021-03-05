import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib4component0Component } from './lib7childlib4component0/lib7childlib4component0.component';
import { Lib7childlib4component1Component } from './lib7childlib4component1/lib7childlib4component1.component';
import { Lib7childlib4parentComponent } from './lib7childlib4parent/lib7childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib4component0Component, Lib7childlib4component1Component, Lib7childlib4parentComponent],
  exports: [Lib7childlib4parentComponent],
})
export class Childlib4Module {}
