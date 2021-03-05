import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib6parentComponent } from './lib32childlib6parent.component';

describe('Lib32childlib6parentComponent', () => {
  let component: Lib32childlib6parentComponent;
  let fixture: ComponentFixture<Lib32childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
