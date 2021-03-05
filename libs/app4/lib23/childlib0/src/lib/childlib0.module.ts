import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib0component0Component } from './lib23childlib0component0/lib23childlib0component0.component';
import { Lib23childlib0component1Component } from './lib23childlib0component1/lib23childlib0component1.component';
import { Lib23childlib0parentComponent } from './lib23childlib0parent/lib23childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib0component0Component, Lib23childlib0component1Component, Lib23childlib0parentComponent],
  exports: [Lib23childlib0parentComponent],
})
export class Childlib0Module {}
