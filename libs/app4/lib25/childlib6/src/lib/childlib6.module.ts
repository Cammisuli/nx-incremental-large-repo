import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib6component0Component } from './lib25childlib6component0/lib25childlib6component0.component';
import { Lib25childlib6component1Component } from './lib25childlib6component1/lib25childlib6component1.component';
import { Lib25childlib6parentComponent } from './lib25childlib6parent/lib25childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib6component0Component, Lib25childlib6component1Component, Lib25childlib6parentComponent],
  exports: [Lib25childlib6parentComponent],
})
export class Childlib6Module {}
