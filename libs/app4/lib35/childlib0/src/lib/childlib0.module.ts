import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib0component0Component } from './lib35childlib0component0/lib35childlib0component0.component';
import { Lib35childlib0component1Component } from './lib35childlib0component1/lib35childlib0component1.component';
import { Lib35childlib0parentComponent } from './lib35childlib0parent/lib35childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib0component0Component, Lib35childlib0component1Component, Lib35childlib0parentComponent],
  exports: [Lib35childlib0parentComponent],
})
export class Childlib0Module {}
