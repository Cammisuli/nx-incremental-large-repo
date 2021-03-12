import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib116parentComponent } from './lib116parent.component';

describe('Lib116parentComponent', () => {
  let component: Lib116parentComponent;
  let fixture: ComponentFixture<Lib116parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib116parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib116parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
