import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib0component0Component } from './lib19childlib0component0/lib19childlib0component0.component';
import { Lib19childlib0component1Component } from './lib19childlib0component1/lib19childlib0component1.component';
import { Lib19childlib0parentComponent } from './lib19childlib0parent/lib19childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib0component0Component, Lib19childlib0component1Component, Lib19childlib0parentComponent],
  exports: [Lib19childlib0parentComponent],
})
export class Childlib0Module {}
