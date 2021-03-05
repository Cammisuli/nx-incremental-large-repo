import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib21childlib9component0Component } from './lib21childlib9component0/lib21childlib9component0.component';
import { Lib21childlib9component1Component } from './lib21childlib9component1/lib21childlib9component1.component';
import { Lib21childlib9parentComponent } from './lib21childlib9parent/lib21childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib21childlib9component0Component, Lib21childlib9component1Component, Lib21childlib9parentComponent],
  exports: [Lib21childlib9parentComponent],
})
export class Childlib9Module {}
