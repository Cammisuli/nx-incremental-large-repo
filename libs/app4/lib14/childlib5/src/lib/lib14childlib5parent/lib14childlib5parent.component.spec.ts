import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib5parentComponent } from './lib14childlib5parent.component';

describe('Lib14childlib5parentComponent', () => {
  let component: Lib14childlib5parentComponent;
  let fixture: ComponentFixture<Lib14childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
