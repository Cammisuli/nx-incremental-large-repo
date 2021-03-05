import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib31childlib9component0Component } from './lib31childlib9component0/lib31childlib9component0.component';
import { Lib31childlib9component1Component } from './lib31childlib9component1/lib31childlib9component1.component';
import { Lib31childlib9parentComponent } from './lib31childlib9parent/lib31childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib31childlib9component0Component, Lib31childlib9component1Component, Lib31childlib9parentComponent],
  exports: [Lib31childlib9parentComponent],
})
export class Childlib9Module {}
