import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27childlib1parentComponent } from './lib27childlib1parent.component';

describe('Lib27childlib1parentComponent', () => {
  let component: Lib27childlib1parentComponent;
  let fixture: ComponentFixture<Lib27childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib27childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
