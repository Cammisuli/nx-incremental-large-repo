import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29childlib6parentComponent } from './lib29childlib6parent.component';

describe('Lib29childlib6parentComponent', () => {
  let component: Lib29childlib6parentComponent;
  let fixture: ComponentFixture<Lib29childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib29childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
