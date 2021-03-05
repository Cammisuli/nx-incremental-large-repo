import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib6component0Component } from './lib35childlib6component0/lib35childlib6component0.component';
import { Lib35childlib6component1Component } from './lib35childlib6component1/lib35childlib6component1.component';
import { Lib35childlib6parentComponent } from './lib35childlib6parent/lib35childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib6component0Component, Lib35childlib6component1Component, Lib35childlib6parentComponent],
  exports: [Lib35childlib6parentComponent],
})
export class Childlib6Module {}
