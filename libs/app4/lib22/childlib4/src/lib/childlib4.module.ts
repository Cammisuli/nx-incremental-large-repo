import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib4component0Component } from './lib22childlib4component0/lib22childlib4component0.component';
import { Lib22childlib4component1Component } from './lib22childlib4component1/lib22childlib4component1.component';
import { Lib22childlib4parentComponent } from './lib22childlib4parent/lib22childlib4parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib4component0Component, Lib22childlib4component1Component, Lib22childlib4parentComponent],
  exports: [Lib22childlib4parentComponent],
})
export class Childlib4Module {}
