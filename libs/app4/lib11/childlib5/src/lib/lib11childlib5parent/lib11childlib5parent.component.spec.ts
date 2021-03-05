import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib5parentComponent } from './lib11childlib5parent.component';

describe('Lib11childlib5parentComponent', () => {
  let component: Lib11childlib5parentComponent;
  let fixture: ComponentFixture<Lib11childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
