import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib21childlib6parentComponent } from './lib21childlib6parent.component';

describe('Lib21childlib6parentComponent', () => {
  let component: Lib21childlib6parentComponent;
  let fixture: ComponentFixture<Lib21childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib21childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib21childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
