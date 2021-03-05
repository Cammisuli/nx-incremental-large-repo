import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib6component0Component } from './lib9childlib6component0/lib9childlib6component0.component';
import { Lib9childlib6component1Component } from './lib9childlib6component1/lib9childlib6component1.component';
import { Lib9childlib6parentComponent } from './lib9childlib6parent/lib9childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib6component0Component, Lib9childlib6component1Component, Lib9childlib6parentComponent],
  exports: [Lib9childlib6parentComponent],
})
export class Childlib6Module {}
