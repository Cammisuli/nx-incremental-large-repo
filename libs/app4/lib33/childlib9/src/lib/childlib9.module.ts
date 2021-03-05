import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib33childlib9component0Component } from './lib33childlib9component0/lib33childlib9component0.component';
import { Lib33childlib9component1Component } from './lib33childlib9component1/lib33childlib9component1.component';
import { Lib33childlib9parentComponent } from './lib33childlib9parent/lib33childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib33childlib9component0Component, Lib33childlib9component1Component, Lib33childlib9parentComponent],
  exports: [Lib33childlib9parentComponent],
})
export class Childlib9Module {}
