import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib0childlib6component0Component } from './lib0childlib6component0/lib0childlib6component0.component';
import { Lib0childlib6component1Component } from './lib0childlib6component1/lib0childlib6component1.component';
import { Lib0childlib6parentComponent } from './lib0childlib6parent/lib0childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib0childlib6component0Component, Lib0childlib6component1Component, Lib0childlib6parentComponent],
  exports: [Lib0childlib6parentComponent],
})
export class Childlib6Module {}
