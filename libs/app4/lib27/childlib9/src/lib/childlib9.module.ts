import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib27childlib9component0Component } from './lib27childlib9component0/lib27childlib9component0.component';
import { Lib27childlib9component1Component } from './lib27childlib9component1/lib27childlib9component1.component';
import { Lib27childlib9parentComponent } from './lib27childlib9parent/lib27childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib27childlib9component0Component, Lib27childlib9component1Component, Lib27childlib9parentComponent],
  exports: [Lib27childlib9parentComponent],
})
export class Childlib9Module {}
