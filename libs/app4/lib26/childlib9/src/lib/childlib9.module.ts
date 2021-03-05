import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib26childlib9component0Component } from './lib26childlib9component0/lib26childlib9component0.component';
import { Lib26childlib9component1Component } from './lib26childlib9component1/lib26childlib9component1.component';
import { Lib26childlib9parentComponent } from './lib26childlib9parent/lib26childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib26childlib9component0Component, Lib26childlib9component1Component, Lib26childlib9parentComponent],
  exports: [Lib26childlib9parentComponent],
})
export class Childlib9Module {}
