import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib38childlib9component0Component } from './lib38childlib9component0/lib38childlib9component0.component';
import { Lib38childlib9component1Component } from './lib38childlib9component1/lib38childlib9component1.component';
import { Lib38childlib9parentComponent } from './lib38childlib9parent/lib38childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib38childlib9component0Component, Lib38childlib9component1Component, Lib38childlib9parentComponent],
  exports: [Lib38childlib9parentComponent],
})
export class Childlib9Module {}
