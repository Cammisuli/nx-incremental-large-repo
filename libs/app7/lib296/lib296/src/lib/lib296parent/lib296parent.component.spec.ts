import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib296parentComponent } from './lib296parent.component';

describe('Lib296parentComponent', () => {
  let component: Lib296parentComponent;
  let fixture: ComponentFixture<Lib296parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib296parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib296parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
