import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib13childlib9component0Component } from './lib13childlib9component0/lib13childlib9component0.component';
import { Lib13childlib9component1Component } from './lib13childlib9component1/lib13childlib9component1.component';
import { Lib13childlib9parentComponent } from './lib13childlib9parent/lib13childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib13childlib9component0Component, Lib13childlib9component1Component, Lib13childlib9parentComponent],
  exports: [Lib13childlib9parentComponent],
})
export class Childlib9Module {}
