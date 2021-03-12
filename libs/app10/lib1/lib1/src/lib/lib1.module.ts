
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
import { Lib1parentComponent } from './lib1parent/lib1parent.component';

  

  @NgModule({
    imports: [CommonModule, ],
    declarations: [Lib1parentComponent],
    exports: [Lib1parentComponent]
  })
  export class Lib1Module {}
  