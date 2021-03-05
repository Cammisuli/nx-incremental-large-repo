import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib4parentComponent } from './lib22childlib4parent.component';

describe('Lib22childlib4parentComponent', () => {
  let component: Lib22childlib4parentComponent;
  let fixture: ComponentFixture<Lib22childlib4parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib4parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
