import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib9component0Component } from './lib16childlib9component0/lib16childlib9component0.component';
import { Lib16childlib9component1Component } from './lib16childlib9component1/lib16childlib9component1.component';
import { Lib16childlib9parentComponent } from './lib16childlib9parent/lib16childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib9component0Component, Lib16childlib9component1Component, Lib16childlib9parentComponent],
  exports: [Lib16childlib9parentComponent],
})
export class Childlib9Module {}
