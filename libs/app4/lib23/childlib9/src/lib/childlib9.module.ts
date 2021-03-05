import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib23childlib9component0Component } from './lib23childlib9component0/lib23childlib9component0.component';
import { Lib23childlib9component1Component } from './lib23childlib9component1/lib23childlib9component1.component';
import { Lib23childlib9parentComponent } from './lib23childlib9parent/lib23childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib23childlib9component0Component, Lib23childlib9component1Component, Lib23childlib9parentComponent],
  exports: [Lib23childlib9parentComponent],
})
export class Childlib9Module {}
