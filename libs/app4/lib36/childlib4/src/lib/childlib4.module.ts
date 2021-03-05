import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib4component0Component } from './lib36childlib4component0/lib36childlib4component0.component';
import { Lib36childlib4component1Component } from './lib36childlib4component1/lib36childlib4component1.component';
import { Lib36childlib4parentComponent } from './lib36childlib4parent/lib36childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib4component0Component, Lib36childlib4component1Component, Lib36childlib4parentComponent],
  exports: [Lib36childlib4parentComponent],
})
export class Childlib4Module {}
