import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib9component0Component } from './lib4childlib9component0/lib4childlib9component0.component';
import { Lib4childlib9component1Component } from './lib4childlib9component1/lib4childlib9component1.component';
import { Lib4childlib9parentComponent } from './lib4childlib9parent/lib4childlib9parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib9component0Component, Lib4childlib9component1Component, Lib4childlib9parentComponent],
  exports: [Lib4childlib9parentComponent],
})
export class Childlib9Module {}
