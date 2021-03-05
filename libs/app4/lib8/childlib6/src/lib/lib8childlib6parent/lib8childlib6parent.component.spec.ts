import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib8childlib6parentComponent } from './lib8childlib6parent.component';

describe('Lib8childlib6parentComponent', () => {
  let component: Lib8childlib6parentComponent;
  let fixture: ComponentFixture<Lib8childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib8childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib8childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
