import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib30childlib6component0Component } from './lib30childlib6component0/lib30childlib6component0.component';
import { Lib30childlib6component1Component } from './lib30childlib6component1/lib30childlib6component1.component';
import { Lib30childlib6parentComponent } from './lib30childlib6parent/lib30childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib30childlib6component0Component, Lib30childlib6component1Component, Lib30childlib6parentComponent],
  exports: [Lib30childlib6parentComponent],
})
export class Childlib6Module {}
