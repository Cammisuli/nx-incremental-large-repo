import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib6component0Component } from './lib10childlib6component0/lib10childlib6component0.component';
import { Lib10childlib6component1Component } from './lib10childlib6component1/lib10childlib6component1.component';
import { Lib10childlib6parentComponent } from './lib10childlib6parent/lib10childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib6component0Component, Lib10childlib6component1Component, Lib10childlib6parentComponent],
  exports: [Lib10childlib6parentComponent],
})
export class Childlib6Module {}
