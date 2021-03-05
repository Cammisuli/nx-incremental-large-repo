import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib5parentComponent } from './lib30childlib5parent.component';

describe('Lib30childlib5parentComponent', () => {
  let component: Lib30childlib5parentComponent;
  let fixture: ComponentFixture<Lib30childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
