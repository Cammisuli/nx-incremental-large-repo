import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib346parentComponent } from './lib346parent.component';

describe('Lib346parentComponent', () => {
  let component: Lib346parentComponent;
  let fixture: ComponentFixture<Lib346parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib346parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib346parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
