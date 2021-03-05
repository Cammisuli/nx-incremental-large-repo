import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib30childlib6parentComponent } from './lib30childlib6parent.component';

describe('Lib30childlib6parentComponent', () => {
  let component: Lib30childlib6parentComponent;
  let fixture: ComponentFixture<Lib30childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib30childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib30childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
