import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib9component0Component } from './lib29childlib9component0/lib29childlib9component0.component';
import { Lib29childlib9component1Component } from './lib29childlib9component1/lib29childlib9component1.component';
import { Lib29childlib9parentComponent } from './lib29childlib9parent/lib29childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib9component0Component, Lib29childlib9component1Component, Lib29childlib9parentComponent],
  exports: [Lib29childlib9parentComponent],
})
export class Childlib9Module {}
