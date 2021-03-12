import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib161parentComponent } from './lib161parent.component';

describe('Lib161parentComponent', () => {
  let component: Lib161parentComponent;
  let fixture: ComponentFixture<Lib161parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib161parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib161parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
