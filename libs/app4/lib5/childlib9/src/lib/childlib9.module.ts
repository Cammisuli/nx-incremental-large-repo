import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib5childlib9component0Component } from './lib5childlib9component0/lib5childlib9component0.component';
import { Lib5childlib9component1Component } from './lib5childlib9component1/lib5childlib9component1.component';
import { Lib5childlib9parentComponent } from './lib5childlib9parent/lib5childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib5childlib9component0Component, Lib5childlib9component1Component, Lib5childlib9parentComponent],
  exports: [Lib5childlib9parentComponent],
})
export class Childlib9Module {}
