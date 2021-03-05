import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib4parentComponent } from './lib8childlib4parent.component';

describe('Lib8childlib4parentComponent', () => {
  let component: Lib8childlib4parentComponent;
  let fixture: ComponentFixture<Lib8childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
