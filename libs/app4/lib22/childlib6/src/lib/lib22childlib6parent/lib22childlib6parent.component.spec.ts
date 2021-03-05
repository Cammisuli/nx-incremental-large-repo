import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib6parentComponent } from './lib22childlib6parent.component';

describe('Lib22childlib6parentComponent', () => {
  let component: Lib22childlib6parentComponent;
  let fixture: ComponentFixture<Lib22childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
