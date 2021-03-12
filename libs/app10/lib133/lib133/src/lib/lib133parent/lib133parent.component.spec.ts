import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib133parentComponent } from './lib133parent.component';

describe('Lib133parentComponent', () => {
  let component: Lib133parentComponent;
  let fixture: ComponentFixture<Lib133parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib133parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib133parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
