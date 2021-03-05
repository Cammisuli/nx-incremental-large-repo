import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10childlib6parentComponent } from './lib10childlib6parent.component';

describe('Lib10childlib6parentComponent', () => {
  let component: Lib10childlib6parentComponent;
  let fixture: ComponentFixture<Lib10childlib6parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib10childlib6parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10childlib6parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
