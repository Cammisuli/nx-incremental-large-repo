import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib12childlib9component0Component } from './lib12childlib9component0/lib12childlib9component0.component';
import { Lib12childlib9component1Component } from './lib12childlib9component1/lib12childlib9component1.component';
import { Lib12childlib9parentComponent } from './lib12childlib9parent/lib12childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib12childlib9component0Component, Lib12childlib9component1Component, Lib12childlib9parentComponent],
  exports: [Lib12childlib9parentComponent],
})
export class Childlib9Module {}
