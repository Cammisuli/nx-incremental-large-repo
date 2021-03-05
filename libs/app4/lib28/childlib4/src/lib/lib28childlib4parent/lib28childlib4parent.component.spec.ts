import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib28childlib4parentComponent } from './lib28childlib4parent.component';

describe('Lib28childlib4parentComponent', () => {
  let component: Lib28childlib4parentComponent;
  let fixture: ComponentFixture<Lib28childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib28childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib28childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
