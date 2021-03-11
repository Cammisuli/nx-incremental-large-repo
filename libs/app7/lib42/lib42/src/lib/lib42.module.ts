
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib42parentComponent } from './lib42parent/lib42parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib42parentComponent],
    exports: [Lib42parentComponent]
  })
  export class Lib42Module {}
  