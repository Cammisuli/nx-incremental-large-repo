import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib6component0Component } from './lib23childlib6component0/lib23childlib6component0.component';
import { Lib23childlib6component1Component } from './lib23childlib6component1/lib23childlib6component1.component';
import { Lib23childlib6parentComponent } from './lib23childlib6parent/lib23childlib6parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib6component0Component, Lib23childlib6component1Component, Lib23childlib6parentComponent],
  exports: [Lib23childlib6parentComponent],
})
export class Childlib6Module {}
