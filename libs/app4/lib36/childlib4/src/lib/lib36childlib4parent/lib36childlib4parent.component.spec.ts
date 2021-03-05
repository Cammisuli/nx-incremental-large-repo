import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib4parentComponent } from './lib36childlib4parent.component';

describe('Lib36childlib4parentComponent', () => {
  let component: Lib36childlib4parentComponent;
  let fixture: ComponentFixture<Lib36childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
