import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib149parentComponent } from './lib149parent.component';

describe('Lib149parentComponent', () => {
  let component: Lib149parentComponent;
  let fixture: ComponentFixture<Lib149parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib149parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib149parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
