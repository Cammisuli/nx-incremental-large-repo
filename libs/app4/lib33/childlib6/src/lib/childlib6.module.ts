import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib6component0Component } from './lib33childlib6component0/lib33childlib6component0.component';
import { Lib33childlib6component1Component } from './lib33childlib6component1/lib33childlib6component1.component';
import { Lib33childlib6parentComponent } from './lib33childlib6parent/lib33childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib6component0Component, Lib33childlib6component1Component, Lib33childlib6parentComponent],
  exports: [Lib33childlib6parentComponent],
})
export class Childlib6Module {}
