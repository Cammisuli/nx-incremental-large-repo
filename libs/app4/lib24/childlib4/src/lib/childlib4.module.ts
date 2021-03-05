import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib4component0Component } from './lib24childlib4component0/lib24childlib4component0.component';
import { Lib24childlib4component1Component } from './lib24childlib4component1/lib24childlib4component1.component';
import { Lib24childlib4parentComponent } from './lib24childlib4parent/lib24childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib4component0Component, Lib24childlib4component1Component, Lib24childlib4parentComponent],
  exports: [Lib24childlib4parentComponent],
})
export class Childlib4Module {}
