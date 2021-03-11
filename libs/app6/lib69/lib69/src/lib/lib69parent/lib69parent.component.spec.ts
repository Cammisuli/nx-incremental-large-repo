import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib69parentComponent } from './lib69parent.component';

describe('Lib69parentComponent', () => {
  let component: Lib69parentComponent;
  let fixture: ComponentFixture<Lib69parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib69parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib69parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
