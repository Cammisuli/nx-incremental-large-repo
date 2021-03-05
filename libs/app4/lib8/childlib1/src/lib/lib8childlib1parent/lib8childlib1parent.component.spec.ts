import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib1parentComponent } from './lib8childlib1parent.component';

describe('Lib8childlib1parentComponent', () => {
  let component: Lib8childlib1parentComponent;
  let fixture: ComponentFixture<Lib8childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
