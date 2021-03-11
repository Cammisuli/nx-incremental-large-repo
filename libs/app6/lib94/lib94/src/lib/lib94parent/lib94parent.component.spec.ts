import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib94parentComponent } from './lib94parent.component';

describe('Lib94parentComponent', () => {
  let component: Lib94parentComponent;
  let fixture: ComponentFixture<Lib94parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib94parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib94parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
