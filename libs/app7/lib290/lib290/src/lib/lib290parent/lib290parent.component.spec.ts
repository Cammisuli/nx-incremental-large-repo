import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib290parentComponent } from './lib290parent.component';

describe('Lib290parentComponent', () => {
  let component: Lib290parentComponent;
  let fixture: ComponentFixture<Lib290parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib290parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib290parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
