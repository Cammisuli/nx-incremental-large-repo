import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib4component0Component } from './lib33childlib4component0/lib33childlib4component0.component';
import { Lib33childlib4component1Component } from './lib33childlib4component1/lib33childlib4component1.component';
import { Lib33childlib4parentComponent } from './lib33childlib4parent/lib33childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib4component0Component, Lib33childlib4component1Component, Lib33childlib4parentComponent],
  exports: [Lib33childlib4parentComponent],
})
export class Childlib4Module {}
