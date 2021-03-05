import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib4parentComponent } from './lib14childlib4parent.component';

describe('Lib14childlib4parentComponent', () => {
  let component: Lib14childlib4parentComponent;
  let fixture: ComponentFixture<Lib14childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
