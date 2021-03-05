import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib1parentComponent } from './lib17childlib1parent.component';

describe('Lib17childlib1parentComponent', () => {
  let component: Lib17childlib1parentComponent;
  let fixture: ComponentFixture<Lib17childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
