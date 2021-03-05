import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib4parentComponent } from './lib13childlib4parent.component';

describe('Lib13childlib4parentComponent', () => {
  let component: Lib13childlib4parentComponent;
  let fixture: ComponentFixture<Lib13childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
