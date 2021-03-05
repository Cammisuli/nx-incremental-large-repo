import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib9childlib9component0Component } from './lib9childlib9component0/lib9childlib9component0.component';
import { Lib9childlib9component1Component } from './lib9childlib9component1/lib9childlib9component1.component';
import { Lib9childlib9parentComponent } from './lib9childlib9parent/lib9childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib9childlib9component0Component, Lib9childlib9component1Component, Lib9childlib9parentComponent],
  exports: [Lib9childlib9parentComponent],
})
export class Childlib9Module {}
