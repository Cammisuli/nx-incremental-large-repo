import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib19childlib8component0Component } from './lib19childlib8component0/lib19childlib8component0.component';
import { Lib19childlib8component1Component } from './lib19childlib8component1/lib19childlib8component1.component';
import { Lib19childlib8parentComponent } from './lib19childlib8parent/lib19childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib19childlib8component0Component, Lib19childlib8component1Component, Lib19childlib8parentComponent],
  exports: [Lib19childlib8parentComponent],
})
export class Childlib8Module {}
