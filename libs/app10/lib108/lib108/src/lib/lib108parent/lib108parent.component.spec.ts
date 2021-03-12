import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib108parentComponent } from './lib108parent.component';

describe('Lib108parentComponent', () => {
  let component: Lib108parentComponent;
  let fixture: ComponentFixture<Lib108parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib108parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib108parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
