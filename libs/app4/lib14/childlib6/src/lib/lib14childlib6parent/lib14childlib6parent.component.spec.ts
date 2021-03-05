import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib14childlib6parentComponent } from './lib14childlib6parent.component';

describe('Lib14childlib6parentComponent', () => {
  let component: Lib14childlib6parentComponent;
  let fixture: ComponentFixture<Lib14childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib14childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib14childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
