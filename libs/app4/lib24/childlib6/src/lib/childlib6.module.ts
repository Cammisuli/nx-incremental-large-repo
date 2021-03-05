import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib6component0Component } from './lib24childlib6component0/lib24childlib6component0.component';
import { Lib24childlib6component1Component } from './lib24childlib6component1/lib24childlib6component1.component';
import { Lib24childlib6parentComponent } from './lib24childlib6parent/lib24childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib6component0Component, Lib24childlib6component1Component, Lib24childlib6parentComponent],
  exports: [Lib24childlib6parentComponent],
})
export class Childlib6Module {}
