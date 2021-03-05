
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';

  import { Childlib0Module } from '@largerepo/app4/lib22/childlib0';
import { Childlib1Module } from '@largerepo/app4/lib22/childlib1';
import { Childlib2Module } from '@largerepo/app4/lib22/childlib2';
import { Childlib3Module } from '@largerepo/app4/lib22/childlib3';
import { Childlib4Module } from '@largerepo/app4/lib22/childlib4';
import { Childlib5Module } from '@largerepo/app4/lib22/childlib5';
import { Childlib6Module } from '@largerepo/app4/lib22/childlib6';
import { Childlib7Module } from '@largerepo/app4/lib22/childlib7';
import { Childlib8Module } from '@largerepo/app4/lib22/childlib8';
import { Childlib9Module } from '@largerepo/app4/lib22/childlib9';
import { Lib22parentComponent } from './lib22parent/lib22parent.component';

  @NgModule({
    imports: [CommonModule, Childlib0Module, Childlib1Module, Childlib2Module, Childlib3Module, Childlib4Module, Childlib5Module, Childlib6Module, Childlib7Module, Childlib8Module, Childlib9Module],
    declarations: [Lib22parentComponent],
    exports: [Lib22parentComponent]
  })
  export class Lib22Module {}
  