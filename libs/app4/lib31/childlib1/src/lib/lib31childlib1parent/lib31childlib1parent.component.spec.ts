import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31childlib1parentComponent } from './lib31childlib1parent.component';

describe('Lib31childlib1parentComponent', () => {
  let component: Lib31childlib1parentComponent;
  let fixture: ComponentFixture<Lib31childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib31childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
