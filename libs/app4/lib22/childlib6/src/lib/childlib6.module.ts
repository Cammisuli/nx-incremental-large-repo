import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib22childlib6component0Component } from './lib22childlib6component0/lib22childlib6component0.component';
import { Lib22childlib6component1Component } from './lib22childlib6component1/lib22childlib6component1.component';
import { Lib22childlib6parentComponent } from './lib22childlib6parent/lib22childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib22childlib6component0Component, Lib22childlib6component1Component, Lib22childlib6parentComponent],
  exports: [Lib22childlib6parentComponent],
})
export class Childlib6Module {}
