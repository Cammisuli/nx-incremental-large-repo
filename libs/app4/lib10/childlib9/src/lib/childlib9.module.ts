import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib10childlib9component0Component } from './lib10childlib9component0/lib10childlib9component0.component';
import { Lib10childlib9component1Component } from './lib10childlib9component1/lib10childlib9component1.component';
import { Lib10childlib9parentComponent } from './lib10childlib9parent/lib10childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib10childlib9component0Component, Lib10childlib9component1Component, Lib10childlib9parentComponent],
  exports: [Lib10childlib9parentComponent],
})
export class Childlib9Module {}
