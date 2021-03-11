
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib4parentComponent } from './lib4parent/lib4parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib4parentComponent],
    exports: [Lib4parentComponent]
  })
  export class Lib4Module {}
  