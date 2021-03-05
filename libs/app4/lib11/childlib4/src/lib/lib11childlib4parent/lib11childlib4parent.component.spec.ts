import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib4parentComponent } from './lib11childlib4parent.component';

describe('Lib11childlib4parentComponent', () => {
  let component: Lib11childlib4parentComponent;
  let fixture: ComponentFixture<Lib11childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
