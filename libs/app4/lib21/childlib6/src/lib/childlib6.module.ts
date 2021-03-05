import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib6component0Component } from './lib21childlib6component0/lib21childlib6component0.component';
import { Lib21childlib6component1Component } from './lib21childlib6component1/lib21childlib6component1.component';
import { Lib21childlib6parentComponent } from './lib21childlib6parent/lib21childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib6component0Component, Lib21childlib6component1Component, Lib21childlib6parentComponent],
  exports: [Lib21childlib6parentComponent],
})
export class Childlib6Module {}
