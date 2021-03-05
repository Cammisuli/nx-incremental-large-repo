import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib9component0Component } from './lib0childlib9component0/lib0childlib9component0.component';
import { Lib0childlib9component1Component } from './lib0childlib9component1/lib0childlib9component1.component';
import { Lib0childlib9parentComponent } from './lib0childlib9parent/lib0childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib0childlib9component0Component, Lib0childlib9component1Component, Lib0childlib9parentComponent],
  exports: [Lib0childlib9parentComponent],
})
export class Childlib9Module {}
