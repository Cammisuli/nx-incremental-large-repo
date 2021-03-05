import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17childlib6parentComponent } from './lib17childlib6parent.component';

describe('Lib17childlib6parentComponent', () => {
  let component: Lib17childlib6parentComponent;
  let fixture: ComponentFixture<Lib17childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib17childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
