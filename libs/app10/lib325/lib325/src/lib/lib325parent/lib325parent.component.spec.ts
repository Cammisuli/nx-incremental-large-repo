import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib325parentComponent } from './lib325parent.component';

describe('Lib325parentComponent', () => {
  let component: Lib325parentComponent;
  let fixture: ComponentFixture<Lib325parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib325parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib325parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
