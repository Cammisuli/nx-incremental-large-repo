import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib0component0Component } from './lib32childlib0component0/lib32childlib0component0.component';
import { Lib32childlib0component1Component } from './lib32childlib0component1/lib32childlib0component1.component';
import { Lib32childlib0parentComponent } from './lib32childlib0parent/lib32childlib0parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib0component0Component, Lib32childlib0component1Component, Lib32childlib0parentComponent],
  exports: [Lib32childlib0parentComponent],
})
export class Childlib0Module {}
