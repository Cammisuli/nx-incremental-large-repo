import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib4parentComponent } from './lib31childlib4parent.component';

describe('Lib31childlib4parentComponent', () => {
  let component: Lib31childlib4parentComponent;
  let fixture: ComponentFixture<Lib31childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
