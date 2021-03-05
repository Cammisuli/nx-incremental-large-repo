import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib13childlib1parentComponent } from './lib13childlib1parent.component';

describe('Lib13childlib1parentComponent', () => {
  let component: Lib13childlib1parentComponent;
  let fixture: ComponentFixture<Lib13childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib13childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib13childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
