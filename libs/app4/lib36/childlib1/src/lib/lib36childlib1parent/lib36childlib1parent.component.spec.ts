import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36childlib1parentComponent } from './lib36childlib1parent.component';

describe('Lib36childlib1parentComponent', () => {
  let component: Lib36childlib1parentComponent;
  let fixture: ComponentFixture<Lib36childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib36childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
