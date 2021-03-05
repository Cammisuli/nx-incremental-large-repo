import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib7childlib6component0Component } from './lib7childlib6component0/lib7childlib6component0.component';
import { Lib7childlib6component1Component } from './lib7childlib6component1/lib7childlib6component1.component';
import { Lib7childlib6parentComponent } from './lib7childlib6parent/lib7childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib7childlib6component0Component, Lib7childlib6component1Component, Lib7childlib6parentComponent],
  exports: [Lib7childlib6parentComponent],
})
export class Childlib6Module {}
