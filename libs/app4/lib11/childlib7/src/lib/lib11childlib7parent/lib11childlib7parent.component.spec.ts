import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib7parentComponent } from './lib11childlib7parent.component';

describe('Lib11childlib7parentComponent', () => {
  let component: Lib11childlib7parentComponent;
  let fixture: ComponentFixture<Lib11childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
