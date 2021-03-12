import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib245parentComponent } from './lib245parent.component';

describe('Lib245parentComponent', () => {
  let component: Lib245parentComponent;
  let fixture: ComponentFixture<Lib245parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib245parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib245parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
