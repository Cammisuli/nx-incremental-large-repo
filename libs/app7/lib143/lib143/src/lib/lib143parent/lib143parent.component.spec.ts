import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib143parentComponent } from './lib143parent.component';

describe('Lib143parentComponent', () => {
  let component: Lib143parentComponent;
  let fixture: ComponentFixture<Lib143parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib143parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib143parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
