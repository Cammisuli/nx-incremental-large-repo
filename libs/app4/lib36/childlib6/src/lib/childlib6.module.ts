import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib6component0Component } from './lib36childlib6component0/lib36childlib6component0.component';
import { Lib36childlib6component1Component } from './lib36childlib6component1/lib36childlib6component1.component';
import { Lib36childlib6parentComponent } from './lib36childlib6parent/lib36childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib6component0Component, Lib36childlib6component1Component, Lib36childlib6parentComponent],
  exports: [Lib36childlib6parentComponent],
})
export class Childlib6Module {}
