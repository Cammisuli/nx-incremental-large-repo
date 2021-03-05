import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib4component0Component } from './lib13childlib4component0/lib13childlib4component0.component';
import { Lib13childlib4component1Component } from './lib13childlib4component1/lib13childlib4component1.component';
import { Lib13childlib4parentComponent } from './lib13childlib4parent/lib13childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib4component0Component, Lib13childlib4component1Component, Lib13childlib4parentComponent],
  exports: [Lib13childlib4parentComponent],
})
export class Childlib4Module {}
