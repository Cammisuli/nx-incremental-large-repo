import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39childlib1parentComponent } from './lib39childlib1parent.component';

describe('Lib39childlib1parentComponent', () => {
  let component: Lib39childlib1parentComponent;
  let fixture: ComponentFixture<Lib39childlib1parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib39childlib1parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39childlib1parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
