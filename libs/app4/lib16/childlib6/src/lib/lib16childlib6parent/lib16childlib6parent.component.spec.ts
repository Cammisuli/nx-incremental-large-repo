import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib6parentComponent } from './lib16childlib6parent.component';

describe('Lib16childlib6parentComponent', () => {
  let component: Lib16childlib6parentComponent;
  let fixture: ComponentFixture<Lib16childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
