import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib8childlib9component0Component } from './lib8childlib9component0/lib8childlib9component0.component';
import { Lib8childlib9component1Component } from './lib8childlib9component1/lib8childlib9component1.component';
import { Lib8childlib9parentComponent } from './lib8childlib9parent/lib8childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib8childlib9component0Component, Lib8childlib9component1Component, Lib8childlib9parentComponent],
  exports: [Lib8childlib9parentComponent],
})
export class Childlib9Module {}
