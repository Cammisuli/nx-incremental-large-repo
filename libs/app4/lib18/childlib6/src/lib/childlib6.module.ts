import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib6component0Component } from './lib18childlib6component0/lib18childlib6component0.component';
import { Lib18childlib6component1Component } from './lib18childlib6component1/lib18childlib6component1.component';
import { Lib18childlib6parentComponent } from './lib18childlib6parent/lib18childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib6component0Component, Lib18childlib6component1Component, Lib18childlib6parentComponent],
  exports: [Lib18childlib6parentComponent],
})
export class Childlib6Module {}
