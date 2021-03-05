import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib6component0Component } from './lib19childlib6component0/lib19childlib6component0.component';
import { Lib19childlib6component1Component } from './lib19childlib6component1/lib19childlib6component1.component';
import { Lib19childlib6parentComponent } from './lib19childlib6parent/lib19childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib6component0Component, Lib19childlib6component1Component, Lib19childlib6parentComponent],
  exports: [Lib19childlib6parentComponent],
})
export class Childlib6Module {}
