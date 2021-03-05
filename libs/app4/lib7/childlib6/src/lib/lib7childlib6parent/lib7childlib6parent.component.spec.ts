import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7childlib6parentComponent } from './lib7childlib6parent.component';

describe('Lib7childlib6parentComponent', () => {
  let component: Lib7childlib6parentComponent;
  let fixture: ComponentFixture<Lib7childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib7childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
