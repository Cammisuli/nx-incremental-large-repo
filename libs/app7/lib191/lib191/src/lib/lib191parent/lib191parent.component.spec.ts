import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib191parentComponent } from './lib191parent.component';

describe('Lib191parentComponent', () => {
  let component: Lib191parentComponent;
  let fixture: ComponentFixture<Lib191parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib191parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib191parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
