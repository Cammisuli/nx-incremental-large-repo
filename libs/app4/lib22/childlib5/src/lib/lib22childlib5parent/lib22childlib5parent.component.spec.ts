import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib5parentComponent } from './lib22childlib5parent.component';

describe('Lib22childlib5parentComponent', () => {
  let component: Lib22childlib5parentComponent;
  let fixture: ComponentFixture<Lib22childlib5parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib5parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib5parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
