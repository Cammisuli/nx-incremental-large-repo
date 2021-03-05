import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib1parentComponent } from './lib24childlib1parent.component';

describe('Lib24childlib1parentComponent', () => {
  let component: Lib24childlib1parentComponent;
  let fixture: ComponentFixture<Lib24childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
