import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib24childlib9component0Component } from './lib24childlib9component0/lib24childlib9component0.component';
import { Lib24childlib9component1Component } from './lib24childlib9component1/lib24childlib9component1.component';
import { Lib24childlib9parentComponent } from './lib24childlib9parent/lib24childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib24childlib9component0Component, Lib24childlib9component1Component, Lib24childlib9parentComponent],
  exports: [Lib24childlib9parentComponent],
})
export class Childlib9Module {}
