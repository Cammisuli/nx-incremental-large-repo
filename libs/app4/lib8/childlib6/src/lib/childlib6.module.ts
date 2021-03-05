import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib6component0Component } from './lib8childlib6component0/lib8childlib6component0.component';
import { Lib8childlib6component1Component } from './lib8childlib6component1/lib8childlib6component1.component';
import { Lib8childlib6parentComponent } from './lib8childlib6parent/lib8childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib6component0Component, Lib8childlib6component1Component, Lib8childlib6parentComponent],
  exports: [Lib8childlib6parentComponent],
})
export class Childlib6Module {}
