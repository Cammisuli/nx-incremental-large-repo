import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib49parentComponent } from './lib49parent.component';

describe('Lib49parentComponent', () => {
  let component: Lib49parentComponent;
  let fixture: ComponentFixture<Lib49parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib49parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib49parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
