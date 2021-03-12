import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib305parentComponent } from './lib305parent.component';

describe('Lib305parentComponent', () => {
  let component: Lib305parentComponent;
  let fixture: ComponentFixture<Lib305parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib305parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib305parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
