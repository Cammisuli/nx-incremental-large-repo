import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16childlib7parentComponent } from './lib16childlib7parent.component';

describe('Lib16childlib7parentComponent', () => {
  let component: Lib16childlib7parentComponent;
  let fixture: ComponentFixture<Lib16childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib16childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
