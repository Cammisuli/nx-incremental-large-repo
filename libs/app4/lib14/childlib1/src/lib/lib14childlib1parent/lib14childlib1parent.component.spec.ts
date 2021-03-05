import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib1parentComponent } from './lib14childlib1parent.component';

describe('Lib14childlib1parentComponent', () => {
  let component: Lib14childlib1parentComponent;
  let fixture: ComponentFixture<Lib14childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
