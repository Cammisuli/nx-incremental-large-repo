import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29parentComponent } from './lib29parent.component';

describe('Lib29parentComponent', () => {
  let component: Lib29parentComponent;
  let fixture: ComponentFixture<Lib29parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
