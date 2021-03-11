
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib101parentComponent } from './lib101parent/lib101parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib101parentComponent],
    exports: [Lib101parentComponent]
  })
  export class Lib101Module {}
  