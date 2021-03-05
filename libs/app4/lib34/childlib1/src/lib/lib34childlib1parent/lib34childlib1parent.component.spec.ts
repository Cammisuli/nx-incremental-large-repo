import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34childlib1parentComponent } from './lib34childlib1parent.component';

describe('Lib34childlib1parentComponent', () => {
  let component: Lib34childlib1parentComponent;
  let fixture: ComponentFixture<Lib34childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
