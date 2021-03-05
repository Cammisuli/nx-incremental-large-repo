import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib5parentComponent } from './lib18childlib5parent.component';

describe('Lib18childlib5parentComponent', () => {
  let component: Lib18childlib5parentComponent;
  let fixture: ComponentFixture<Lib18childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
