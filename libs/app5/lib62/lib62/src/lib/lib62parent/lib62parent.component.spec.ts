import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib62parentComponent } from './lib62parent.component';

describe('Lib62parentComponent', () => {
  let component: Lib62parentComponent;
  let fixture: ComponentFixture<Lib62parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib62parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib62parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
