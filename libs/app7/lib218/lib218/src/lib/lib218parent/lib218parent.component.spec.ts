import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib218parentComponent } from './lib218parent.component';

describe('Lib218parentComponent', () => {
  let component: Lib218parentComponent;
  let fixture: ComponentFixture<Lib218parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib218parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib218parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
