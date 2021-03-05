import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20childlib6parentComponent } from './lib20childlib6parent.component';

describe('Lib20childlib6parentComponent', () => {
  let component: Lib20childlib6parentComponent;
  let fixture: ComponentFixture<Lib20childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
