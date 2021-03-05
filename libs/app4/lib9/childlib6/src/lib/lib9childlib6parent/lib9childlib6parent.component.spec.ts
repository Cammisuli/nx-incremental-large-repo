import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib9childlib6parentComponent } from './lib9childlib6parent.component';

describe('Lib9childlib6parentComponent', () => {
  let component: Lib9childlib6parentComponent;
  let fixture: ComponentFixture<Lib9childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib9childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib9childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
