import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib353parentComponent } from './lib353parent.component';

describe('Lib353parentComponent', () => {
  let component: Lib353parentComponent;
  let fixture: ComponentFixture<Lib353parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib353parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib353parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
