import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib36childlib9component0Component } from './lib36childlib9component0/lib36childlib9component0.component';
import { Lib36childlib9component1Component } from './lib36childlib9component1/lib36childlib9component1.component';
import { Lib36childlib9parentComponent } from './lib36childlib9parent/lib36childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib36childlib9component0Component, Lib36childlib9component1Component, Lib36childlib9parentComponent],
  exports: [Lib36childlib9parentComponent],
})
export class Childlib9Module {}
