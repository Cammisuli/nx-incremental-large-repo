import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib15childlib9component0Component } from './lib15childlib9component0/lib15childlib9component0.component';
import { Lib15childlib9component1Component } from './lib15childlib9component1/lib15childlib9component1.component';
import { Lib15childlib9parentComponent } from './lib15childlib9parent/lib15childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib15childlib9component0Component, Lib15childlib9component1Component, Lib15childlib9parentComponent],
  exports: [Lib15childlib9parentComponent],
})
export class Childlib9Module {}
