import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib33childlib6parentComponent } from './lib33childlib6parent.component';

describe('Lib33childlib6parentComponent', () => {
  let component: Lib33childlib6parentComponent;
  let fixture: ComponentFixture<Lib33childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib33childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib33childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
