import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib5parentComponent } from './lib13childlib5parent.component';

describe('Lib13childlib5parentComponent', () => {
  let component: Lib13childlib5parentComponent;
  let fixture: ComponentFixture<Lib13childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
