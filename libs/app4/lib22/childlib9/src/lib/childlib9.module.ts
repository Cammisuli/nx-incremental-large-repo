import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib9component0Component } from './lib22childlib9component0/lib22childlib9component0.component';
import { Lib22childlib9component1Component } from './lib22childlib9component1/lib22childlib9component1.component';
import { Lib22childlib9parentComponent } from './lib22childlib9parent/lib22childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib9component0Component, Lib22childlib9component1Component, Lib22childlib9parentComponent],
  exports: [Lib22childlib9parentComponent],
})
export class Childlib9Module {}
