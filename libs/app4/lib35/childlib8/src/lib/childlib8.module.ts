import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib35childlib8component0Component } from './lib35childlib8component0/lib35childlib8component0.component';
import { Lib35childlib8component1Component } from './lib35childlib8component1/lib35childlib8component1.component';
import { Lib35childlib8parentComponent } from './lib35childlib8parent/lib35childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib35childlib8component0Component, Lib35childlib8component1Component, Lib35childlib8parentComponent],
  exports: [Lib35childlib8parentComponent],
})
export class Childlib8Module {}
