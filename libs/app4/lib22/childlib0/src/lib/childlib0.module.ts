import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib0component0Component } from './lib22childlib0component0/lib22childlib0component0.component';
import { Lib22childlib0component1Component } from './lib22childlib0component1/lib22childlib0component1.component';
import { Lib22childlib0parentComponent } from './lib22childlib0parent/lib22childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib0component0Component, Lib22childlib0component1Component, Lib22childlib0parentComponent],
  exports: [Lib22childlib0parentComponent],
})
export class Childlib0Module {}
