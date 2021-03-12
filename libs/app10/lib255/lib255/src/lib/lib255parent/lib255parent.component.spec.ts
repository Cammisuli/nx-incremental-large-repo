import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib255parentComponent } from './lib255parent.component';

describe('Lib255parentComponent', () => {
  let component: Lib255parentComponent;
  let fixture: ComponentFixture<Lib255parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib255parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib255parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
