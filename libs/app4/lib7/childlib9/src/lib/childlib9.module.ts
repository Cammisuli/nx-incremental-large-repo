import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib9component0Component } from './lib7childlib9component0/lib7childlib9component0.component';
import { Lib7childlib9component1Component } from './lib7childlib9component1/lib7childlib9component1.component';
import { Lib7childlib9parentComponent } from './lib7childlib9parent/lib7childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib9component0Component, Lib7childlib9component1Component, Lib7childlib9parentComponent],
  exports: [Lib7childlib9parentComponent],
})
export class Childlib9Module {}
