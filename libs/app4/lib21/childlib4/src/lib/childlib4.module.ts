import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib4component0Component } from './lib21childlib4component0/lib21childlib4component0.component';
import { Lib21childlib4component1Component } from './lib21childlib4component1/lib21childlib4component1.component';
import { Lib21childlib4parentComponent } from './lib21childlib4parent/lib21childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib4component0Component, Lib21childlib4component1Component, Lib21childlib4parentComponent],
  exports: [Lib21childlib4parentComponent],
})
export class Childlib4Module {}
