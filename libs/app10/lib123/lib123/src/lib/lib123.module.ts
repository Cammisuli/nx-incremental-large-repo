
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib123parentComponent } from './lib123parent/lib123parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib123parentComponent],
    exports: [Lib123parentComponent]
  })
  export class Lib123Module {}
  