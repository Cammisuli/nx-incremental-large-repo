import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib4childlib8component0Component } from './lib4childlib8component0/lib4childlib8component0.component';
import { Lib4childlib8component1Component } from './lib4childlib8component1/lib4childlib8component1.component';
import { Lib4childlib8parentComponent } from './lib4childlib8parent/lib4childlib8parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib4childlib8component0Component, Lib4childlib8component1Component, Lib4childlib8parentComponent],
  exports: [Lib4childlib8parentComponent],
})
export class Childlib8Module {}
