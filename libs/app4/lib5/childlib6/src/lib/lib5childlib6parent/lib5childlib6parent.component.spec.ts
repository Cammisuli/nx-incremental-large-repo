import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib5childlib6parentComponent } from './lib5childlib6parent.component';

describe('Lib5childlib6parentComponent', () => {
  let component: Lib5childlib6parentComponent;
  let fixture: ComponentFixture<Lib5childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib5childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib5childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
