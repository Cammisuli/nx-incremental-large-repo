import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib333parentComponent } from './lib333parent.component';

describe('Lib333parentComponent', () => {
  let component: Lib333parentComponent;
  let fixture: ComponentFixture<Lib333parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib333parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib333parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
