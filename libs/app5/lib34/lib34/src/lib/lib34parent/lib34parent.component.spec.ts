import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34parentComponent } from './lib34parent.component';

describe('Lib34parentComponent', () => {
  let component: Lib34parentComponent;
  let fixture: ComponentFixture<Lib34parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib34parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
