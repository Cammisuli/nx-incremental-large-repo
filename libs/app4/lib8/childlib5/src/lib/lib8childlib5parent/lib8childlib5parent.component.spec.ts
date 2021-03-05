import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib5parentComponent } from './lib8childlib5parent.component';

describe('Lib8childlib5parentComponent', () => {
  let component: Lib8childlib5parentComponent;
  let fixture: ComponentFixture<Lib8childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
