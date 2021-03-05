import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib5component0Component } from './lib22childlib5component0/lib22childlib5component0.component';
import { Lib22childlib5component1Component } from './lib22childlib5component1/lib22childlib5component1.component';
import { Lib22childlib5parentComponent } from './lib22childlib5parent/lib22childlib5parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib5component0Component, Lib22childlib5component1Component, Lib22childlib5parentComponent],
  exports: [Lib22childlib5parentComponent],
})
export class Childlib5Module {}
