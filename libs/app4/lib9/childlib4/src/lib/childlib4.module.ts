import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib4component0Component } from './lib9childlib4component0/lib9childlib4component0.component';
import { Lib9childlib4component1Component } from './lib9childlib4component1/lib9childlib4component1.component';
import { Lib9childlib4parentComponent } from './lib9childlib4parent/lib9childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib4component0Component, Lib9childlib4component1Component, Lib9childlib4parentComponent],
  exports: [Lib9childlib4parentComponent],
})
export class Childlib4Module {}
