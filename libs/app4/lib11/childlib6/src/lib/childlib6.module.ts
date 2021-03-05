import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib11childlib6component0Component } from './lib11childlib6component0/lib11childlib6component0.component';
import { Lib11childlib6component1Component } from './lib11childlib6component1/lib11childlib6component1.component';
import { Lib11childlib6parentComponent } from './lib11childlib6parent/lib11childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib11childlib6component0Component, Lib11childlib6component1Component, Lib11childlib6parentComponent],
  exports: [Lib11childlib6parentComponent],
})
export class Childlib6Module {}
