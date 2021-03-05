import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib6parentComponent } from './lib12childlib6parent.component';

describe('Lib12childlib6parentComponent', () => {
  let component: Lib12childlib6parentComponent;
  let fixture: ComponentFixture<Lib12childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
