import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib5parentComponent } from './lib20childlib5parent.component';

describe('Lib20childlib5parentComponent', () => {
  let component: Lib20childlib5parentComponent;
  let fixture: ComponentFixture<Lib20childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
