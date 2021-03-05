import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib9component0Component } from './lib30childlib9component0/lib30childlib9component0.component';
import { Lib30childlib9component1Component } from './lib30childlib9component1/lib30childlib9component1.component';
import { Lib30childlib9parentComponent } from './lib30childlib9parent/lib30childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib9component0Component, Lib30childlib9component1Component, Lib30childlib9parentComponent],
  exports: [Lib30childlib9parentComponent],
})
export class Childlib9Module {}
