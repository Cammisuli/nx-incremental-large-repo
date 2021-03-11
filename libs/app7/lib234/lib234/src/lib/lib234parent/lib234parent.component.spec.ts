import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib234parentComponent } from './lib234parent.component';

describe('Lib234parentComponent', () => {
  let component: Lib234parentComponent;
  let fixture: ComponentFixture<Lib234parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib234parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib234parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
