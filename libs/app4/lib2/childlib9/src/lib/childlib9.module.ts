import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2childlib9component0Component } from './lib2childlib9component0/lib2childlib9component0.component';
import { Lib2childlib9component1Component } from './lib2childlib9component1/lib2childlib9component1.component';
import { Lib2childlib9parentComponent } from './lib2childlib9parent/lib2childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2childlib9component0Component, Lib2childlib9component1Component, Lib2childlib9parentComponent],
  exports: [Lib2childlib9parentComponent],
})
export class Childlib9Module {}
