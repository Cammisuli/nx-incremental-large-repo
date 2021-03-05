import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib0parentComponent } from './lib22childlib0parent.component';

describe('Lib22childlib0parentComponent', () => {
  let component: Lib22childlib0parentComponent;
  let fixture: ComponentFixture<Lib22childlib0parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib0parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib0parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
