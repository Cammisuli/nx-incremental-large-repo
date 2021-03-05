import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib22childlib7parentComponent } from './lib22childlib7parent.component';

describe('Lib22childlib7parentComponent', () => {
  let component: Lib22childlib7parentComponent;
  let fixture: ComponentFixture<Lib22childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib22childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib22childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
