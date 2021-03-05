import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib6component0Component } from './lib13childlib6component0/lib13childlib6component0.component';
import { Lib13childlib6component1Component } from './lib13childlib6component1/lib13childlib6component1.component';
import { Lib13childlib6parentComponent } from './lib13childlib6parent/lib13childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib6component0Component, Lib13childlib6component1Component, Lib13childlib6parentComponent],
  exports: [Lib13childlib6parentComponent],
})
export class Childlib6Module {}
