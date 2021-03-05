import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib16childlib6component0Component } from './lib16childlib6component0/lib16childlib6component0.component';
import { Lib16childlib6component1Component } from './lib16childlib6component1/lib16childlib6component1.component';
import { Lib16childlib6parentComponent } from './lib16childlib6parent/lib16childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib16childlib6component0Component, Lib16childlib6component1Component, Lib16childlib6parentComponent],
  exports: [Lib16childlib6parentComponent],
})
export class Childlib6Module {}
