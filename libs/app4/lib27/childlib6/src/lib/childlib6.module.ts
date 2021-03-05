import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib6component0Component } from './lib27childlib6component0/lib27childlib6component0.component';
import { Lib27childlib6component1Component } from './lib27childlib6component1/lib27childlib6component1.component';
import { Lib27childlib6parentComponent } from './lib27childlib6parent/lib27childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib6component0Component, Lib27childlib6component1Component, Lib27childlib6parentComponent],
  exports: [Lib27childlib6parentComponent],
})
export class Childlib6Module {}
