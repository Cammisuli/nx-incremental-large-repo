import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib315parentComponent } from './lib315parent.component';

describe('Lib315parentComponent', () => {
  let component: Lib315parentComponent;
  let fixture: ComponentFixture<Lib315parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib315parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib315parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
