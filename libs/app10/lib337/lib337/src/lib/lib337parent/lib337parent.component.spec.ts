import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib337parentComponent } from './lib337parent.component';

describe('Lib337parentComponent', () => {
  let component: Lib337parentComponent;
  let fixture: ComponentFixture<Lib337parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib337parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib337parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
