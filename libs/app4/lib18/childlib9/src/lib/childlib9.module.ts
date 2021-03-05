import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib18childlib9component0Component } from './lib18childlib9component0/lib18childlib9component0.component';
import { Lib18childlib9component1Component } from './lib18childlib9component1/lib18childlib9component1.component';
import { Lib18childlib9parentComponent } from './lib18childlib9parent/lib18childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib18childlib9component0Component, Lib18childlib9component1Component, Lib18childlib9parentComponent],
  exports: [Lib18childlib9parentComponent],
})
export class Childlib9Module {}
