import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib32childlib9component0Component } from './lib32childlib9component0/lib32childlib9component0.component';
import { Lib32childlib9component1Component } from './lib32childlib9component1/lib32childlib9component1.component';
import { Lib32childlib9parentComponent } from './lib32childlib9parent/lib32childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib32childlib9component0Component, Lib32childlib9component1Component, Lib32childlib9parentComponent],
  exports: [Lib32childlib9parentComponent],
})
export class Childlib9Module {}
