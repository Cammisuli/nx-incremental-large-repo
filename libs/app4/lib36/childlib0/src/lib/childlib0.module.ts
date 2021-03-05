import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib0component0Component } from './lib36childlib0component0/lib36childlib0component0.component';
import { Lib36childlib0component1Component } from './lib36childlib0component1/lib36childlib0component1.component';
import { Lib36childlib0parentComponent } from './lib36childlib0parent/lib36childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib0component0Component, Lib36childlib0component1Component, Lib36childlib0parentComponent],
  exports: [Lib36childlib0parentComponent],
})
export class Childlib0Module {}
