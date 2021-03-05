import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib11childlib1parentComponent } from './lib11childlib1parent.component';

describe('Lib11childlib1parentComponent', () => {
  let component: Lib11childlib1parentComponent;
  let fixture: ComponentFixture<Lib11childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib11childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib11childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
