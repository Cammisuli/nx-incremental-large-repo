import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib2parentComponent } from './lib22childlib2parent.component';

describe('Lib22childlib2parentComponent', () => {
  let component: Lib22childlib2parentComponent;
  let fixture: ComponentFixture<Lib22childlib2parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib2parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib2parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
