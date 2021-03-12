import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19parentComponent } from './lib19parent.component';

describe('Lib19parentComponent', () => {
  let component: Lib19parentComponent;
  let fixture: ComponentFixture<Lib19parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib19parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
