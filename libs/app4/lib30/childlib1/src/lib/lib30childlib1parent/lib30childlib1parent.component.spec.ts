import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib1parentComponent } from './lib30childlib1parent.component';

describe('Lib30childlib1parentComponent', () => {
  let component: Lib30childlib1parentComponent;
  let fixture: ComponentFixture<Lib30childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
