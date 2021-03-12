import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib318parentComponent } from './lib318parent.component';

describe('Lib318parentComponent', () => {
  let component: Lib318parentComponent;
  let fixture: ComponentFixture<Lib318parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib318parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib318parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
