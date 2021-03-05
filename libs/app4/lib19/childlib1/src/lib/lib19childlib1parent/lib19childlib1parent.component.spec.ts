import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19childlib1parentComponent } from './lib19childlib1parent.component';

describe('Lib19childlib1parentComponent', () => {
  let component: Lib19childlib1parentComponent;
  let fixture: ComponentFixture<Lib19childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
