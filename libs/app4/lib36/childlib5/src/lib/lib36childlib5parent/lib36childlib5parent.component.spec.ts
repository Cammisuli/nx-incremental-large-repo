import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib5parentComponent } from './lib36childlib5parent.component';

describe('Lib36childlib5parentComponent', () => {
  let component: Lib36childlib5parentComponent;
  let fixture: ComponentFixture<Lib36childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
