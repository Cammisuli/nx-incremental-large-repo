import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib0component0Component } from './lib2childlib0component0/lib2childlib0component0.component';
import { Lib2childlib0component1Component } from './lib2childlib0component1/lib2childlib0component1.component';
import { Lib2childlib0parentComponent } from './lib2childlib0parent/lib2childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib0component0Component, Lib2childlib0component1Component, Lib2childlib0parentComponent],
  exports: [Lib2childlib0parentComponent],
})
export class Childlib0Module {}
