import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32childlib4parentComponent } from './lib32childlib4parent.component';

describe('Lib32childlib4parentComponent', () => {
  let component: Lib32childlib4parentComponent;
  let fixture: ComponentFixture<Lib32childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib32childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
