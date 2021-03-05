import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24childlib6parentComponent } from './lib24childlib6parent.component';

describe('Lib24childlib6parentComponent', () => {
  let component: Lib24childlib6parentComponent;
  let fixture: ComponentFixture<Lib24childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib24childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
