import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib5parentComponent } from './lib24childlib5parent.component';

describe('Lib24childlib5parentComponent', () => {
  let component: Lib24childlib5parentComponent;
  let fixture: ComponentFixture<Lib24childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
