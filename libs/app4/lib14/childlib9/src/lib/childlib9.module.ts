import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib14childlib9component0Component } from './lib14childlib9component0/lib14childlib9component0.component';
import { Lib14childlib9component1Component } from './lib14childlib9component1/lib14childlib9component1.component';
import { Lib14childlib9parentComponent } from './lib14childlib9parent/lib14childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib14childlib9component0Component, Lib14childlib9component1Component, Lib14childlib9parentComponent],
  exports: [Lib14childlib9parentComponent],
})
export class Childlib9Module {}
