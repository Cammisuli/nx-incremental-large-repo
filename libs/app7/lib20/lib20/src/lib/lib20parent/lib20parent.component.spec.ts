import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib20parentComponent } from './lib20parent.component';

describe('Lib20parentComponent', () => {
  let component: Lib20parentComponent;
  let fixture: ComponentFixture<Lib20parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib20parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib20parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
