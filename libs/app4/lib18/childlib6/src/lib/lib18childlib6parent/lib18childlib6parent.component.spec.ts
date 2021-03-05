import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18childlib6parentComponent } from './lib18childlib6parent.component';

describe('Lib18childlib6parentComponent', () => {
  let component: Lib18childlib6parentComponent;
  let fixture: ComponentFixture<Lib18childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib18childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
