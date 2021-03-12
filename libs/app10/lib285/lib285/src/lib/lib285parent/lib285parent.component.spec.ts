import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib285parentComponent } from './lib285parent.component';

describe('Lib285parentComponent', () => {
  let component: Lib285parentComponent;
  let fixture: ComponentFixture<Lib285parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib285parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib285parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
