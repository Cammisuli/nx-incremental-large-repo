import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib140parentComponent } from './lib140parent.component';

describe('Lib140parentComponent', () => {
  let component: Lib140parentComponent;
  let fixture: ComponentFixture<Lib140parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib140parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib140parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
