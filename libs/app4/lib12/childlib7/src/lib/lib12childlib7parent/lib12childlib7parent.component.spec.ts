import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12childlib7parentComponent } from './lib12childlib7parent.component';

describe('Lib12childlib7parentComponent', () => {
  let component: Lib12childlib7parentComponent;
  let fixture: ComponentFixture<Lib12childlib7parentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lib12childlib7parentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12childlib7parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
