import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib5parentComponent } from './lib16childlib5parent.component';

describe('Lib16childlib5parentComponent', () => {
  let component: Lib16childlib5parentComponent;
  let fixture: ComponentFixture<Lib16childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
