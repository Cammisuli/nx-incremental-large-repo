import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib28childlib9component0Component } from './lib28childlib9component0/lib28childlib9component0.component';
import { Lib28childlib9component1Component } from './lib28childlib9component1/lib28childlib9component1.component';
import { Lib28childlib9parentComponent } from './lib28childlib9parent/lib28childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib28childlib9component0Component, Lib28childlib9component1Component, Lib28childlib9parentComponent],
  exports: [Lib28childlib9parentComponent],
})
export class Childlib9Module {}
