import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib20childlib9component0Component } from './lib20childlib9component0/lib20childlib9component0.component';
import { Lib20childlib9component1Component } from './lib20childlib9component1/lib20childlib9component1.component';
import { Lib20childlib9parentComponent } from './lib20childlib9parent/lib20childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib20childlib9component0Component, Lib20childlib9component1Component, Lib20childlib9parentComponent],
  exports: [Lib20childlib9parentComponent],
})
export class Childlib9Module {}
