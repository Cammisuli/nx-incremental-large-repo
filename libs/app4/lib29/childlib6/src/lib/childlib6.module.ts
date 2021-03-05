import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib29childlib6component0Component } from './lib29childlib6component0/lib29childlib6component0.component';
import { Lib29childlib6component1Component } from './lib29childlib6component1/lib29childlib6component1.component';
import { Lib29childlib6parentComponent } from './lib29childlib6parent/lib29childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib29childlib6component0Component, Lib29childlib6component1Component, Lib29childlib6parentComponent],
  exports: [Lib29childlib6parentComponent],
})
export class Childlib6Module {}
