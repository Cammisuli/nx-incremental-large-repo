import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib25childlib9component0Component } from './lib25childlib9component0/lib25childlib9component0.component';
import { Lib25childlib9component1Component } from './lib25childlib9component1/lib25childlib9component1.component';
import { Lib25childlib9parentComponent } from './lib25childlib9parent/lib25childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib25childlib9component0Component, Lib25childlib9component1Component, Lib25childlib9parentComponent],
  exports: [Lib25childlib9parentComponent],
})
export class Childlib9Module {}
